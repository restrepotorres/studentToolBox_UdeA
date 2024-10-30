import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");
  //validar si ya esta el token en local storage
  //validar si aun funciona
  //usar el token del local storage 

  //ejemplo de loguearse
  const handleSubmit = async () => {
    console.log("Email:", username);
    console.log("Password:", password);
    const url =
      "https://toolbox-backend.onrender.com/toolbox/api/v1/auth/login";
    const requestBody = {
      username: username,
      password: password,
    };

    try {
      const res = await axios.post(url, requestBody);
      setResponse(res.data);
      setToken(res.data.accessToken);
      window.location.href= "/admin"
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
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Introduce tu usuario"
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
      </form>
      <button onClick={handleSubmit}>login test</button>
      <br />

      <button onClick={()=>{
        console.log(token)
      }}>hola</button>
    </div>
  );
};

export default LoginForm;
