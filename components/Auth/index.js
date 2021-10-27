import supabase  from "../../utils/supabaseClient";
import { useState } from "react";
import { useForm } from "react-hook-form";


const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // console.log(username, password);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = ({ password, username }) =>(setPassword(password), setUsername(username),console.log(username, password)) ;
  return (
    <div>
      {/* <h1>Login Form</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" onChange={e=>(
            setUsername(e.target.value)
          )}/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={e=>{
            setPassword(e.target.value)
          }}/>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form> */}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input  {...register("username",{required:true})} />

        {/* include validation with required or other standard HTML validation rules */}
        <input type ="password"{...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>Campos necesarios</span>}

        <input type="submit" />
      </form>
    </div>
  )
}

export default Auth;