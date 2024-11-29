import React, { useState, useEffect } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
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

  // Define styles based on the area property
  const areaStyles: { [key: string]: React.CSSProperties } = {
    CEN: { background: "#85ed9d", border: "3px solid #cdd62d", borderRadius: "8px"  },
    ESP: { background: "#2e3282", border: "3px solid red", color: "white", borderRadius: "8px"  },
    SA: { background: "white", border: "3px solid black", borderRadius: "8px"  },
    MD: { background: "#e3ae98", border: "3px solid black", borderRadius: "8px"  },
    AP: { background: "#dbbe3b", border: "3px solid black", borderRadius: "8px"  },
    IB: { background: "lightgreen", border: "3px solid black", borderRadius: "8px"  },
    IS: { background: "#c4e075", border: "3px solid red", borderRadius: "8px"  },
    AI: { background: "#f2e746", border: "3px solid red", borderRadius: "8px"  },
    BAN: { background: "#b0b0b5", border: "3px solid black", borderRadius: "25px" },
    CIC: { background: "#4e75de", border: "3px solid black", borderRadius: "8px"  },
    PIS: { background: "white", border: "3px solid black", borderRadius: "8px"  },
    CD: { background: "#ed6639", border: "3px solid yellow", borderRadius: "8px", color: "white"  },
  };

  // Fetch subjects from API
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

  // Add subjects from API as nodes
  useEffect(() => {
    subjects.forEach((subject) => {
      setNodes((nds) =>
        nds.concat({
          id: subject.id,
          position: { x: (subject.level - 1) * 300, y: subject.version * 90 },
          data: {
            label: <RFNode subject={subject} noHandles={false} />,
          },
          style: areaStyles[subject.area] || {}, // Use areaStyles map
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
        })
      );

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
        defaultViewport={{ x: 50, y: 50, zoom: 0.5 }}
        elevateEdgesOnSelect={true}
      >
        
        <Background gap={12} size={1} />
      </ReactFlow>
    </>
  );
};

export default ReactFlowMain;