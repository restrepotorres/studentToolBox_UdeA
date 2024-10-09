import React, { useState } from "react";
import axios, { AxiosError } from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  //ejemplo de loguearse
  const handleSubmit = async () => {
    console.log("Email:", email);
    console.log("Password:", password);
    const url =
      "https://toolbox-backend.onrender.com/toolbox/api/v1/auth/login";
    const requestBody = {
      //las credenciales estan quemadas
      username: "victor",
      password: "1234",
    };

    try {
      const res = await axios.post(url, requestBody);
      setResponse(res.data);
      //la llamada retorna un token que almacenaremos para usar en llamadas a la api que requieran token
      setToken(res.data.accessToken);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response ? err.response.data : err.message);
      }
    }
  };

  const handleSubmitWithJWT = async () => {
    const url =
      "https://toolbox-backend.onrender.com/toolbox/api/v1/health/check";

    setError(null);

    try {
      const response = await axios.get(url, {
        //se pasa en el header el token que anteriormente se obtuvo
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response ? err.response.data : err.message);
      }
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="textc"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introduce tu email"
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Introduce tu contraseña"
            required
          />
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
      <button onClick={handleSubmit}>login test</button>
      <br />
      <button onClick={handleSubmitWithJWT}>jwt test</button>
    </div>
  );
};

export default LoginForm;
