import convert from "xml-js";
import soapRequest from "easy-soap-request";
import { url, headers, xml, errors } from "../../../const";
import { saveConsultaLog } from "../../../lib/mongodb";

export default async function handler(req, res) {
  const startTime = Date.now();
  const values = [];
  const { slug } = req.query;

  // Obtener información adicional de la request
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || null;
  const userAgent = req.headers['user-agent'] || null;

  // Validar formato de entrada
  if (slug.length !== 4) {
    const errorResponse = { error: errors.noFormatData };

    // Guardar log de error en MongoDB
    try {
      await saveConsultaLog(
        {
          slug,
          values: [],
          ip: clientIP,
          userAgent
        },
        {
          success: false,
          data: null,
          error: errors.noFormatData,
          processingTime: Date.now() - startTime
        }
      );
    } catch (mongoError) {
      console.error('Error al guardar log en MongoDB:', mongoError);
    }

    return res.status(400).json(errorResponse);
  }

  // Procesar valores de entrada
  slug.map((data, i) => {
    values[i] = data
      .toString()
      .toLowerCase()
      .replace(/&/gi, "&amp;")
      .replace(/ñ/gi, "&ntilde;");
  });

  try {
    // Realizar petición SOAP
    const { response } = await soapRequest({ url, headers, xml: xml(values) });
    const { body } = response;
    const jsonResponse = convert.xml2json(body, { compact: true, spaces: 4 });
    const processingTime = Date.now() - startTime;

    // Guardar log exitoso en MongoDB
    try {
      await saveConsultaLog(
        {
          slug,
          values,
          ip: clientIP,
          userAgent
        },
        {
          success: true,
          data: jsonResponse,
          error: null,
          processingTime
        }
      );
    } catch (mongoError) {
      console.error('Error al guardar log en MongoDB:', mongoError);
      // No interrumpir la respuesta por error de MongoDB
    }

    res.send(jsonResponse);
  } catch (error) {
    console.error('Error en petición SOAP:', error);
    const processingTime = Date.now() - startTime;
    const errorResponse = { error: errors.apiTimeOut };

    // Guardar log de error en MongoDB
    try {
      await saveConsultaLog(
        {
          slug,
          values,
          ip: clientIP,
          userAgent
        },
        {
          success: false,
          data: null,
          error: errors.apiTimeOut,
          processingTime
        }
      );
    } catch (mongoError) {
      console.error('Error al guardar log en MongoDB:', mongoError);
    }

    res.status(500).send(errorResponse);
  }
}
