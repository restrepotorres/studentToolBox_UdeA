import React, { useState, useEffect } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import { initialNodes } from "./nodes";
import axios from "axios";
import RFNode from "./ReactFlowNode";


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

const ReactFlowMain: React.FC = () => {


  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  
  //el siguiente useEffect obtiene todas las materias del api
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get<Subject[]>(
          "https://toolbox-backend.onrender.com/toolbox/api/v1/subjectbasic/"
        );
        setSubjects(response.data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    fetchSubjects();
  }, []);

  //en este useEffect se agregan las materias traidas del api como nodos para ser renderizadas
  useEffect(() => {
    subjects.forEach((subject) => {
      setNodes((nds) =>
        nds.concat({
          id: subject.id,
          position: { x: (subject.level - 1) * 300, y: subject.version * 80 },
          data: {
            label: <RFNode subject={subject} noHandles={false} />,
          },
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
        })
      );

/*       subject.corequisites.forEach((corequisite) => {
        setEdges((edgs) =>
          edgs.concat({
            id: `e${subject.id}_${corequisite}`,
            source: subject.id,
            target: corequisite,
            type: "smoothstep",
          })
        );
      }); */

      subject.prerequisites.forEach((prerequisite) => {
        setEdges((edgs) =>
          edgs.concat({
            id: `e${prerequisite}_${subject.id}`,
            source: prerequisite,
            target: subject.id,
            type: "bezier",
          })
        );
      });
      //Edges id notation --> e(códigoMateriaSource)_(códigoMateriaTarget)
    });
  }, [subjects]);

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        minZoom={0.2}
        maxZoom={2.5}
        defaultViewport={ {x: 50, y: 50, zoom: 0.5} }
        elevateEdgesOnSelect={true}
      >
        <Controls />
        <Background gap={28} size={0.5} />
      </ReactFlow>

    </>
  );
};

export default ReactFlowMain;
