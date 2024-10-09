import { Position } from 'reactflow';
import RFNode from './ReactFlowNode';

export const initialNodes = [
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
