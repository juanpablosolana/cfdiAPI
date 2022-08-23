const url =
  "https://consultaqr.facturaelectronica.sat.gob.mx/ConsultaCFDIService.svc";

const headers = {
  "user-agent": "sampleTest",
  "Content-Type": "text/xml;charset=UTF-8",
  soapAction: "http://tempuri.org/IConsultaCFDIService/Consulta",
};

const xml = (values) => {
  return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
     <soapenv:Header/>
     <soapenv:Body>
        <tem:Consulta>
           <!--Optional:-->
           <tem:expresionImpresa><![CDATA[?re=${values[0]}?rr=${values[1]}?tt=${values[2]}?id=${values[3]}]]>
           </tem:expresionImpresa>
        </tem:Consulta>
     </soapenv:Body>
  </soapenv:Envelope>`;
};

const customCss = {
  form: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
  animation: "animate-bounce",
  button:
    "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
};

const errors = {
  apiTimeOut: "Error de conexión con el servicio",
  noFormatData: "Bad request",
};

export { url, headers, xml, customCss, errors };
