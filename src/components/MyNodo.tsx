import React, { useState } from "react";

type nodoprops = { readonly nombre: string; readonly creditos: number };
function MyNodo({ nombre, creditos }: nodoprops): JSX.Element {
  return (
    <div onClick=
    {() => {
      alert(`holi esta materia se llama ${nombre}`);
    }}>
      <h1>{nombre}</h1>
      <div> creditos: {creditos}</div>
    </div>
  );
}

export default MyNodo;
