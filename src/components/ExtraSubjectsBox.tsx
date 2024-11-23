import React from "react";

const ExtraSubjectsBox: React.FC = () => {
  return (
    <div className="bg-green-600 text-white p-5 h-full flex flex-col rounded-md">
      <h2 className="text-lg font-bold mb-2 text-center">Línea de énfasis principal</h2>
      <p className="mb-4 text-justify">Escoge tu línea de énfasis principal:</p>
      <select className="p-2 bg-white text-black rounded mb-4">
        <option value="1">Ciencias de la computación</option>
        <option value="2">Ingeniería de Software</option>
        <option value="3">Ingeniería de Computadores</option>
      </select>

      <div className="bg-green-500 p-4 rounded-lg mb-4">
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" /> INGENIERÍA WEB
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" /> BIG DATA
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" /> PRUEBAS DE SOFTWARE
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" /> DESARROLLO DE APLICACIONES EMPRESARIALES
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" /> GESTIÓN DE TIC
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" /> SEGURIDAD DE LA INFORMACIÓN
        </label>
      </div>

      <button className="bg-white text-green-600 font-bold py-2 px-4 rounded hover:bg-green-700 hover:text-white transition-colors">
        Agregar materias
      </button>
    </div>
  );
};

export default ExtraSubjectsBox;
