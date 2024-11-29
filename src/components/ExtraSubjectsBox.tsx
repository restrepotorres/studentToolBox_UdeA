import React, { useState } from "react";

const ExtraSubjectsBox: React.FC = () => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const handleCheckboxChange = (subject: string) => {
    setSelectedSubjects((prev) => {
      if (prev.includes(subject)) {
        // If already selected, remove it
        return prev.filter((s) => s !== subject);
      } else if (prev.length < 3) {
        // Add only if less than 3 are selected
        return [...prev, subject];
      }
      return prev; // Do nothing if 3 are already selected
    });
  };

  const handleButtonClick = () => {
    console.log("Materias seleccionadas:", selectedSubjects);
  };

  return (
    <div className="bg-green-600 text-white p-5 h-full flex flex-col rounded-md">
      <h2 className="text-lg font-bold mb-2 text-center">Línea de énfasis principal</h2>
      <p className="mb-4 text-justify">Escoge tu línea de énfasis principal:</p>
      <select className="p-2 bg-white text-black rounded mb-4">
        <option value="1">Ingeniería de Software</option>
        <option value="2">Ciencias de la computación</option>
        <option value="3">Ingeniería de Computadores</option>
      </select>

      <div className="bg-green-500 p-4 rounded-lg mb-4">
        {[
          "INGENIERÍA WEB",
          "BIG DATA",
          "PRUEBAS DE SOFTWARE",
          "DESARROLLO DE APLICACIONES EMPRESARIALES",
          "GESTIÓN DE TIC",
          "SEGURIDAD DE LA INFORMACIÓN",
        ].map((subject) => (
          <label key={subject} className="block mb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedSubjects.includes(subject)}
              disabled={!selectedSubjects.includes(subject) && selectedSubjects.length >= 3}
              onChange={() => handleCheckboxChange(subject)}
            />
            {subject}
          </label>
        ))}
      </div>

      <button
        onClick={handleButtonClick}
        className="bg-white text-green-600 font-bold py-2 px-4 rounded hover:bg-green-700 hover:text-white transition-colors"
      >
        Agregar materias
      </button>
    </div>
  );
};

export default ExtraSubjectsBox;
