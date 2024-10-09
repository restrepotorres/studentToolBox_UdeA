import React from "react";
import { Handle, Position } from "reactflow";

type nodoprops = { readonly nombre: string; readonly creditos: number };
function RFNode({ nombre, creditos }: nodoprops): JSX.Element {
  return (
    <div className="rf-node">
      {/* Handle on the left (target input) */}
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }} // Optional: Color styling
        isConnectable={true} // Ensure this handle is connectable
      />

      {/* Node content */}
      <div onClick={() => alert(`holi esta materia se llama ${nombre}`)}>
        <h1>{nombre}</h1>
        <div>creditos: {creditos}</div>
      </div>

      {/* Handle on the right (source output) */}
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "#555" }} // Optional: Color styling
        isConnectable={true} // Ensure this handle is connectable
      />
    </div>
  );
}

export default RFNode;
