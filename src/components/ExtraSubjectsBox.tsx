// src/components/ExtraSubjectsBox.tsx
import React from 'react';

const ExtraSubjectsBox: React.FC = () => {
  return (
    <div className="bg-green-500 text-white p-5 h-full flex flex-col">
      <h2 className="text-lg font-bold mb-2 text-center">Linea de énfasis principal</h2>
      <p className="mb-4 text-justify">Escoje tu linea de énfasis principal</p>
      <select className="p-2 bg-white text-black rounded">
        <option value="1">Ciencias de la computación</option>
        <option value="2">Ingeniería de Software</option>
        <option value="3">Ingeniería de Computadores</option>
      </select>
    </div>
  );
};

export default ExtraSubjectsBox;
