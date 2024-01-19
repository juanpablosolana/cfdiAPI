import convert from "xml-js";
import soapRequest from "easy-soap-request";
import { url, headers, xml, errors } from "../../../const";

export default async function handler(req, res) {
  const values = [];
  const { slug } = req.query;

  if (slug.length !== 4) res.status(400).json({ error: errors.noFormatData });

  slug.map((data, i) => {
    values[i] = data
      .toString()
      .toLowerCase()
      .replace(/&/gi, "&amp;")
      .replace(/ñ/gi, "&ntilde;");
  });

    try {
    const { response } = await soapRequest({ url, headers, xml: xml(values) });
      const { body } = response;
    res.send(convert.xml2json(body, { compact: true, spaces: 4 }));
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: errors.apiTimeOut });
    }
}
