import convert from 'xml-js';
import soapRequest from 'easy-soap-request';

export default function handler(req, res) {
  const values = new Object();
  const { slug } = req.query
  slug.map((data, i) => {
    data = data.toString().toLowerCase().replace(/&/gi, '&amp;').replace(/ñ/gi, '&ntilde;')
    values[i] = data
  })

  const url = 'https://consultaqr.facturaelectronica.sat.gob.mx/ConsultaCFDIService.svc';
  const sampleHeaders = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://tempuri.org/IConsultaCFDIService/Consulta',
  };
  const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
     <soapenv:Header/>
     <soapenv:Body>
        <tem:Consulta>
           <!--Optional:-->
           <tem:expresionImpresa><![CDATA[?re=${values[0]}?rr=${values[1]}?tt=${values[2]}?id=${values[3]}]]>
           </tem:expresionImpresa>
        </tem:Consulta>
     </soapenv:Body>
  </soapenv:Envelope>`;

  const data = async () => {
    const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml });
    const { body } = response;
    res.send(convert.xml2json(body, { compact: true, spaces: 4 }))
  }
  data()
}