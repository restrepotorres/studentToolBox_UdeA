import React, { useState, useEffect } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import { initialNodes } from "./nodes"; // Import initial nodes
import { initialEdges } from "./edges"; // Import initial edges
import axios from "axios";
import RFNode from "./ReactFlowNode";
import RFNode2 from "./ReactFlowNode2";

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

let subjectExample: Subject = {
  id: "1",
  name: "Mathematics",
  prerequisites: ["Algebra"],
  corequisites: ["Physics"],
  credits: 5,
  level: 2,
  area: "Science",
  state: true,
};

const initialNodes2 = [
  {
    id: "2508120",
    position: { x: 0, y: 200 },
    data: { label: <RFNode2 subject={subjectExample} noHandles={true} /> },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
];

const ReactFlowMain: React.FC = () => {
  //const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes2);

  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get<Subject[]>(
          "http://localhost:8090/toolbox/api/v1/subjectbasic/"
        );
        setSubjects(response.data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    fetchSubjects();
  }, []);

  useEffect(() => {
    subjects.forEach((subject) => {
      setNodes((nds) =>
        nds.concat({
          id: subject.id,
          position: { x: 5 * subject.level + 12, y: 400 },
          data: {
            label: <RFNode2 subject={subject} noHandles={false} />,
          },
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
        })
      );
      console.log(nodes);
    });
  }, [subjects]);

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      >
        <Controls />
        <Background gap={12} size={1} />
      </ReactFlow>
      <div>
        <h1>Subjects</h1>
        <ul>
          {subjects.map((subject) => (
            <li key={subject.id}>
              {subject.name} - {subject.credits} credits
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ReactFlowMain;
