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

  const [correquisitos, setSubjects] = useState<Subject>();

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get<Subject>(
          `https://toolbox-backend.onrender.com/toolbox/api/v1/subjectfull/${subjectFull?.prerequisites}`
        );
        setSubjects(response.data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    if (subjectFull?.corequisites) {
      fetchSubjects();
      console.log()
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
      {/* <h1>{subjectFull?.name}</h1>
      <h1>Resumen de la materia</h1>
      <h2>{subjectFull?.summary}</h2> */}

      <div className="bg-[#4CAF50] p-4 justify-center text-center">
        <h1>{subjectFull?.name}</h1>
      </div>
      <strong>Resumen: </strong>
      <p>{subjectFull?.summary}</p>
      <strong>Prerrequisitos: </strong>
      <p>{correquisitos?.name}</p>
    </Drawer>
  );
};

export default Drower;
