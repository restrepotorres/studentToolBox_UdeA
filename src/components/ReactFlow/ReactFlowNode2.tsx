import React from "react";
import { Handle, Position } from "reactflow";

type nodoprops = {
  readonly nombre: string;
  readonly creditos: number;
  readonly noHandles?: boolean; // Optional prop for no handles
};

interface Subject {
  id: string;
  name: string;
  prerequisites: string[];
  corequisites: string[];
  credits: number;
  level: number;
  area: string;
  state: boolean;
}

interface SubjectProps {
  subject: Subject; // El prop es del tipo de la interfaz Subject
  noHandles: boolean;
}

const RFNode2: React.FC<SubjectProps> = (
  { subject },
  noHandles: boolean
) => {
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
      <div onClick={() => alert(`holi esta materia se llama ${subject.name}`)}>
        <h1>{subject.name}</h1>
        {subject.credits > 0 && <div>creditos: {subject.credits}</div>}
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
    </div>
  );
};

export default RFNode2;
