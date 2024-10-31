import React, { useEffect, useState } from "react";
import { Handle, Position } from "reactflow";
import "react-modern-drawer/dist/index.css";
import ReactDOM from "react-dom";
import Drower from "../Drawer";
import axios from "axios";
import type { Subject, SubjectFull } from "../../interfaces/";

interface SubjectProps {
  subject: Subject;
  noHandles: boolean;
}

const RFNode: React.FC<SubjectProps> = ({ subject }, noHandles: boolean) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [fullSubject, setfullSubject] = useState<SubjectFull | undefined>();

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get<SubjectFull>(
          `https://toolbox-backend.onrender.com/toolbox/api/v1/subjectfull/${subject.id}`
        );
        setfullSubject(response.data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };
    if (isOpen) fetchSubjects();
  }, [isOpen]);

  return (
    <div className="rf-node">
      {/* Conditionally render handles if noHandles is false or undefined */}
      {!noHandles && (
        <>
          <Handle
            type="target"
            position={Position.Left}
            style={{ background: "#555" }}
            isConnectable={true}
          />
        </>
      )}

      {/* Node content */}
      <div
        onClick={() => {
          setIsOpen(true);
          console.log(fullSubject);
        }}
      >
        <h1>{subject.name}</h1>
        <div className="flex justify-between items-center">
          {subject.credits > 0 && <div>{subject.id}</div>}
          {subject.credits > 0 && <div>| {subject.credits}</div>}
        </div>
      </div>

      {!noHandles && (
        <>
          <Handle
            type="source"
            position={Position.Right}
            style={{ background: "#555" }}
            isConnectable={true}
          />
        </>
      )}

      {ReactDOM.createPortal(
        isOpen && (
          <Drower subjectFull={fullSubject} open={isOpen} setOpen={setIsOpen} />
        ),
        document.body
      )}
    </div>
  );
};

export default RFNode;
