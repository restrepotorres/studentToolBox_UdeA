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

  const [prerrequisitos, setPrerrequisito] = useState<Subject>();
  const [correquisitos, setcorrequisitos] = useState<Subject>();

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

    if (subjectFull?.corequisites) {
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
      style={{ backgroundColor: "#A7F3D0", padding: "10px" }}
    >
      {/* <h1>{subjectFull?.name}</h1>
      <h1>Resumen de la materia</h1>
      <h2>{subjectFull?.summary}</h2> */}

      <div className="bg-green-900 p-3 justify-center text-center rounded-md">
        <h1 className="font-bold text-gray-100 text-xl">{subjectFull?.name}</h1>
      </div>
      <strong className="font-bold text-green-900">Resumen: </strong>
      <p>{subjectFull?.summary}</p>
      <strong className="font-bold text-green-900">Créditos: </strong>
      <p>{subjectFull?.credits}</p>
      <strong className="font-bold text-green-900">Prerrequisitos: </strong>
      <p>{prerrequisitos?.name}</p>
      <strong className="font-bold text-green-900">Correquisitos: </strong>
      <p>{correquisitos?.name}</p>
      <strong>Tips: </strong>
      <p>{subjectFull?.tips}</p>
      <strong className="font-bold text-green-900">Recursos: </strong>
      <br />
      <a
        href={subjectFull?.usefulResources.libro?.[1]}
        target="_blank"
        className="text-blue-500 hover:underline"
      >
        Libro
      </a>

      <p></p>
      <p>{subjectFull?.usefulResources.libro?.[0]}</p>
    </Drawer>
  );
};

export default Drower;
