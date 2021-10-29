import {useState,useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {

  }, [status]);

  const onSubmit = async data => {
    setLoading(true)
    const URL = `/api/estatus/${data.RFCEmisor}/${data.RFCReceptor}/${data.Monto}/${data.UUID}`
    // console.log(URL);
   await fetch(URL)
      .then(res => res.json())
      .then(data => {
        setStatus(data['s:Envelope']['s:Body']['ConsultaResponse']['ConsultaResult']['a:Estado']['_text'])
        setLoading(false)
      })
      .catch(err => console.log(err));
}
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
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
    <h1>Estatus: {status?status:loading}</h1>
    </>
  )
}
export default Form;