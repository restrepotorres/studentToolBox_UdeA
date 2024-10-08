import React from 'react';
import ReactFlow, { Controls, Background, useNodesState, useEdgesState, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import RFNode from './ReactFlowNode';

const ReactFlowMain = () => {
    const initialNodes = [
        {
          id: "idlogica1",
          position: { x: 0, y: 200 },
          data: { label: <RFNode nombre="logica I" creditos={3} /> },
          sourcePosition: Position.Right, // Conectar desde el lado derecho
          targetPosition: Position.Left,  // Recibir desde el lado izquierdo
        },
        {
          id: "idlogica2",
          position: { x: 200, y: 100 },
          data: { label: <RFNode nombre="logica II" creditos={3} /> },
          sourcePosition: Position.Right, // Conectar desde el lado derecho
          targetPosition: Position.Left,  // Recibir desde el lado izquierdo
        },
      ];
      

      const initialEdges = [
        {
          id: "e1-2",
          source: "idlogica1",
          target: "idlogica2",
          type: "smoothstep", // Esto hará que el edge sea recto
        },
      ];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="w-lvw h-lvh m-auto border-3 border-solid border-green-500">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      >
        <Controls />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default ReactFlowMain;
