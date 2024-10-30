import React from "react";
import "react-modern-drawer/dist/index.css";
import Edit from "./Edit";

const AdminView = () => {
  return (
    <>
      <button>Editar Materia</button>
      <br />
      <button>Crear Materia</button>
      <Edit></Edit>
      <a href="/login">holita</a>
      
    </>
  );
};

export default AdminView;
