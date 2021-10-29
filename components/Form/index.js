import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [status, setStatus] = useState(null)
  const [statusCode, setStatusCode] = useState("")
  const [cancelCode, setCancelCode] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit = data => {
    setLoading(true)
    setStatus(null)
    const URL = `/api/estatus/${data.RFCEmisor}/${data.RFCReceptor}/${data.Monto}/${data.UUID}`
    // console.log(URL);
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setStatus(data['s:Envelope']['s:Body']['ConsultaResponse']['ConsultaResult']['a:Estado']['_text'])
        setStatusCode(data['s:Envelope']['s:Body']['ConsultaResponse']['ConsultaResult']['a:CodigoEstatus']['_text'])
        setCancelCode(data['s:Envelope']['s:Body']['ConsultaResponse']['ConsultaResult']['a:EsCancelable']['_text'])
        document.getElementById("api-form").reset();
        setLoading(false)
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form id="api-form" className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="RFC Emisor" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"  {...register("RFCEmisor", { required: true, minLength: 12, maxLength: 12 })} />
          <input placeholder="RFC Receptor" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" {...register("RFCReceptor", { required: true })} />
          <input placeholder="Total con centavos" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" type="number" step="0.01" {...register("Monto", { required: true, min: 0 })} />
          <input placeholder="UUID tal como aparece en la factura" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" {...register("UUID", { required: true, minLength: 36, maxLength: 36 })} />
          <input type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
        </form>
        {
          status ? (
            <>
              <h1>Estatus: {status}</h1>
              <h2>Código: {statusCode} </h2>
              <h2>Es cancelable: {cancelCode}</h2>
            </>
          ) : loading
        }
      </div>
    </div>
  )
}
export default Form;