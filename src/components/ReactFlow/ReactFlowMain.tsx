import React from 'react';
import ReactFlow, { Controls, Background, useNodesState, useEdgesState, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import { initialNodes } from './nodes'; // Import initial nodes
import { initialEdges } from './edges'; // Import initial edges

const ReactFlowMain = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      >
        <Controls />
        <Background gap={12} size={1} />
      </ReactFlow>

  );
};

export default ReactFlowMain;
