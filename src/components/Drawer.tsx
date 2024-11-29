import React, { useState, useEffect } from "react";
import axios from "axios";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import type { SubjectFullProps } from "../interfaces";
interface Subject {
  id: string;
  name: string;
  prerequisites: string[];
  corequisites: string[];
  credits: number;
  level: number;
  version: number;
  area: string;
  state: boolean;
}

const Drower: React.FC<SubjectFullProps> = ({ subjectFull, open, setOpen }) => {
  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  const toggleResources = () => {
    setIsResourcesOpen((prev) => !prev);
  };

  const [prerrequisitos, setPrerrequisito] = useState<Subject>();
  const [correquisitos, setcorrequisitos] = useState<Subject>();
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get<Subject>(
          `https://toolbox-backend.onrender.com/toolbox/api/v1/subjectfull/${subjectFull?.prerequisites}`
        );
        setPrerrequisito(response.data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    if (subjectFull?.prerequisites) {
      fetchSubjects();
      console.log();
    }
  }, [subjectFull]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get<Subject>(
          `https://toolbox-backend.onrender.com/toolbox/api/v1/subjectfull/${subjectFull?.corequisites}`
        );
        setcorrequisitos(response.data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    if (subjectFull?.corequisites) {
      fetchSubjects();
      console.log();
    }
  }, [subjectFull]);

  return (
    <Drawer
      open={open}
      onClose={toggleDrawer}
      direction="right"
      className={subjectFull?.area}
      size={"30vw"}
    >

      <div className="bg-[#4CAF50] p-4 text-center">
        <h1 className="text-2xl font-bold text-white">{subjectFull?.name}</h1>
      </div>

      <div className="flex justify-around items-center bg-[#e8f5e9] py-2 text-gray-700">
        <p className="font-medium">Créditos: {subjectFull?.credits}</p>
        <p className="font-medium">Nivel: {subjectFull?.level}</p>
      </div>    

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Resumen</h2>
        <p className="text-justify mb-4"> {subjectFull?.summary} </p>

        {subjectFull?.tips && subjectFull.tips.length > 0 && (
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Tips</h2>
            <ul className="list-disc list-inside text-justify space-y-1">
              {subjectFull.tips.map((tip, index) => (
                <li key={index} className="text-gray-700">{tip}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-4">
          <button
            onClick={toggleResources}
            className="w-full bg-[#4CAF50] text-white font-semibold py-2 px-4 rounded hover:bg-[#3e8e41] transition-all"
          >
            Recursos
          </button>
          {isResourcesOpen && (
            <div className="mt-2 bg-gray-100 border border-gray-300 rounded p-3">
            <ul className="space-y-2">
              {subjectFull?.usefulResources?.libro && (
                <li>
                  <a
                    href={subjectFull.usefulResources.libro[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    📚 Libro: {subjectFull.usefulResources.libro[0]}
                  </a>
                </li>
              )}
              {subjectFull?.usefulResources?.video && (
                <li>
                  <a
                    href={subjectFull.usefulResources.video[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    🎥 Video: {subjectFull.usefulResources.video[0]}
                  </a>
                </li>
              )}
              {subjectFull?.usefulResources?.pdf && (
                <li>
                  <a
                    href={subjectFull.usefulResources.pdf[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    📄 PDF: {subjectFull.usefulResources.pdf[0]}
                  </a>
                </li>
              )}
            </ul>
            </div>
          )}
        </div>
      </div>


{/*       <strong className="font-bold text-green-900">Prerrequisitos: </strong>
      <p>{prerrequisitos?.name}</p>
      <strong className="font-bold text-green-900">Correquisitos: </strong>
      <p>{correquisitos?.name}</p> */}
    </Drawer>
  );
};

export default Drower;
