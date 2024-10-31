import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import type { SubjectFullProps } from "../interfaces";

const Drower: React.FC<SubjectFullProps> = ({ subjectFull, open, setOpen }) => {
  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

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
    </Drawer>
  );
};

export default Drower;
