import React, { useState } from "react";
import "react-modern-drawer/dist/index.css";

const Edit = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Email:", email);
  };
  //chip react para prerrequisitos y correquisitos
  return (
    <>
      {/* 
    buscar materia por nombre
    Editar sus campos
    en prerrequisitos y correquisitos debe ser una lista desplegable
    nombre
    codigo
    creditos
    nivel
    nivel
    prerrequisitos
    correquisitos
    intensidad horaria
    recursos utiles
    area
    obligatoria

    */}{" "}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Edit;
