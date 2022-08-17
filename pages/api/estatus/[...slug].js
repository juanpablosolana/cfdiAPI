import convert from 'xml-js';
import soapRequest from 'easy-soap-request';
import { url, sampleHeaders, xml } from '../../../const'

export default function handler(req, res) {
  const values = [];
  const { slug } = req.query
 if (slug.length !== 4){
   res.status(400).json({ error: 'Bad request' })
 }

  slug.map((data, i) => {
    values[i] = data.toString().toLowerCase().replace(/&/gi, '&amp;').replace(/ñ/gi, '&ntilde;')
  })

  const data = async () => {
    const { response } = await soapRequest({ url, headers: sampleHeaders, xml: xml(values) });
    const { statusCode } = response;
    const { body } = response;
    statusCode === 200
      ? res.status(200).send(convert.xml2json(body, { compact: true, spaces: 4 }))
      : res.status(500).send({ error: 'Servicio del SAT en mantenimiento reintenta en unos minutos' })
  }
  data()
}