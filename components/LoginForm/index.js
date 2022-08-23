import { useState } from "react";

const Loginform = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <div>
      <h1>Login Form</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Loginform;
