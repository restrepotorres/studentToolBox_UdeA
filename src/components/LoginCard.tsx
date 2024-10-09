import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    console.log("Email:", email);
    console.log("Password:", password);
    const url = "http://localhost:8090/toolbox/api/v1/auth/login";
    const requestBody = {
      username: "victor",
      password: "1234",
    };

    try {
      const res = await axios.post(url, requestBody);
      setResponse(res.data);
      console.log("Respuesta del servidor:", res.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmitWithJWT = async () => {
    const url = "http://localhost:8090/toolbox/api/v1/health/check";
    const token =
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aWN0b3IiLCJyb2xlIjoiW2FkbWluXSIsImlhdCI6MTcyODQyOTU0MywiZXhwIjoxNzI4NDY1NTQzfQ.qYm2CrTHtBcc6fQu21Apf8lxR4CW_a3rqD--Pcw5XUNEPuFIo1lizDJCa6ycxsgrFolzt40rjCM2Up71vQtw2Q";

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data); 
    } catch (err) {
      setError(err.response ? err.response.data : err.message); 
    } finally {
      setLoading(false); 
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
      <button onClick={handleSubmitWithJWT} disabled={loading}>
        jwt test
      </button>
    </div>
  );
};

export default LoginForm;
