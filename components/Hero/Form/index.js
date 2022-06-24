import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Spinner from '../../Spinner'

const Form = ({ rfcEmisor, rfcReceptor, total, folioFiscal, example, setExample }) => {
  const { register, handleSubmit, reset, setValue } = useForm({ mode: 'onBlur' });
  const [status, setStatus] = useState(null)
  const [statusCode, setStatusCode] = useState("")
  const [cancelCode, setCancelCode] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (example) {
      setValue("rfcEmisor", `${rfcEmisor}`);
      setValue("rfcReceptor", `${rfcReceptor}`);
      setValue("total", `${total}`);
      setValue("folioFiscal", `${folioFiscal}`);
    }
  }, [example]);

  const onSubmit = data => {
    setLoading(true)
    setStatus(null)
    setExample(false)
    const URL = `/api/estatus/${data.rfcEmisor}/${data.rfcReceptor}/${data.total}/${data.folioFiscal}`
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setStatus(data['s:Envelope']['s:Body']['ConsultaResponse']['ConsultaResult']['a:Estado']['_text'])
        setStatusCode(data['s:Envelope']['s:Body']['ConsultaResponse']['ConsultaResult']['a:CodigoEstatus']['_text'])
        setCancelCode(data['s:Envelope']['s:Body']['ConsultaResponse']['ConsultaResult']['a:EsCancelable']['_text'])
        reset()
        document.getElementById("rfcEmisor").focus();
        setLoading(false)
        setTimeout(() => {
          setStatus(null)
        }, 5000);
      })
      .catch(err => {
        setStatus(err)
        setLoading(false)
      })
  }
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full space-y-8 ">
        <label className="flex justify-center text-gray-800 ml-1">Ingresa los datos de la factura</label>
        <form id="api-form" className="mt-8 space-y-6 " onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="RFC Emisor"
            id="rfcEmisor"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            {...register("rfcEmisor", { required: true, minLength: 12, maxLength: 15 })} />
          <input
            placeholder="RFC Receptor"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            {...register("rfcReceptor", { required: true, minLength: 12, maxLength: 15 })} />
          <input
            placeholder="Total con centavos"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="number"
            step="0.01"
            {...register("total", { required: true, min: 0 })} />
          <input
            placeholder="Folio fiscal / folioFiscal tal como aparece en la factura"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            {...register("folioFiscal", { required: true, minLength: 36, maxLength: 36 })} />
          {loading
          ? <Spinner />
          : <input
            id="submit"
            type="submit"
            className={example
              ? "animate-bounce group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              : "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"} />}
        </form>
        {
          status && <div
            className={status === 'Vigente'
            ? "bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
            : "bg-red-100 border-l-4 border-red-500 text-red-700 p-4"}>
              <h1>Estatus: {status}</h1>
              <h2>Código: {statusCode} </h2>
              <h2>Es cancelable: {cancelCode}</h2>
            </div>
        }
      </div>
    </div>
  )
}
export default Form;
