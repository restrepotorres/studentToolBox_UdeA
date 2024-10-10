import React from "react";
import { Handle, Position } from "reactflow";

type nodoprops = { 
  readonly nombre: string; 
  readonly creditos: number;
  readonly noHandles?: boolean; // Optional prop for no handles
};

function RFNode({ nombre, creditos, noHandles }: nodoprops): JSX.Element {
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
      <div onClick={() => alert(`holi esta materia se llama ${nombre}`)}>
        <h1>{nombre}</h1>
        {creditos > 0 && <div>creditos: {creditos}</div>}
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
}

export default RFNode;
