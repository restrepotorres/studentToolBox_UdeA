import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  NodeToolbar,
  NodeResizer,
  
  type Connection,
  type Edge,
} from "reactflow";
import "reactflow/dist/style.css";
import MyNodo from "./MyNodo";
import axios from "axios";
const styles = {
  width: "80vw",
  height: "90vh",
};

const initialNodes = [
  {
    id: "idlogica1",
    position: { x: 0, y: 100 },
    data: { label: <MyNodo nombre="logica I" creditos={3} /> },
  },
  {
    id: "idlogica2",
    position: { x: 200, y: 100 },
    data: {
      label: <MyNodo nombre="logica II" creditos={3} />,
    },
    className: "algoritmia",
  },
];

const initialEdges = [{ id: "e1-2", source: "idlogica1", target: "idlogica2" }];

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  //uncomment to test http get request
  //   const [data, setData] = useState<User[] | null>(null);
  //   const [loading, setLoading] = useState<boolean>(true);
  //   const [error, setError] = useState<string | null>(null);

  //   useEffect(() => {
  //     axios
  //       .get<User[]>("http://localhost:8090/toolbox/api/v1/subject/getall")
  //       .then((response) => {
  //         setData(response.data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         setError(error.message);
  //         setLoading(false);
  //       });
  //   }, []);
  //  console.log(data?.map((user) => user.id));
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  //uncomment to test http get request
  //   if (loading) return <p>Cargando...</p>;
  //   if (error) return <p>{error}</p>;
  return (
    <>
      <div style={styles}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />
          <NodeToolbar />
          <Background gap={12} size={1} />
        </ReactFlow>
      </div>
    </>
  );
}

export default App;
