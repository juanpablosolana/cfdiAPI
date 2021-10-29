import {useState,useEffect } from "react";
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
    <>
    <form id="api-form"onSubmit={handleSubmit(onSubmit)}>
      <label >RFC Emisor sin guiones </label>
      <input {...register("RFCEmisor", { required: true, minLength: 12, maxLength: 12 })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <label >RFC Receptor sin guiones </label>
      <input {...register("RFCReceptor", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <label >Total con centavos </label>
      <input type="number" step="0.01" {...register("Monto", { required: true, min: 0 })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <label >UUID tal cual parece en la factura </label>
      <input {...register("UUID", { required: true, minLength: 36, maxLength: 36 })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
    {
      status?(
      <>
      <h1>Estatus: {status}</h1>
      <h2>Código: {statusCode} </h2>
      <h2>Es cancelable: {cancelCode}</h2>
      </>
      ):loading
    }

    </>
  )
}
export default Form;