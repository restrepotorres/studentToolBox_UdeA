import { Position } from 'reactflow';
import RFNode from './ReactFlowNode';

export const initialNodes = [
  // Nivel 1
  {
    id: "n1banner",
    position: { x: 0, y: 100 },
    data: { label: <RFNode nombre="Nivel 1" creditos={0} noHandles={true} /> },  // No handles
    // No need for sourcePosition or targetPosition
  },
  {
    id: "2508120",
    position: { x: 0, y: 200 },
    data: { label: <RFNode nombre="Introducción a la Ingeniería de Sistemas" creditos={1} /> },  // Handles enabled
    sourcePosition: Position.Right, // Conectar desde el lado derecho
    targetPosition: Position.Left,  // Recibir desde el lado izquierdo
  },
  {
    id: "2536101",
    position: { x: 0, y: 300 },
    data: { label: <RFNode nombre="Descubriendo la Física" creditos={3} /> },  // Handles enabled
    sourcePosition: Position.Right, // Conectar desde el lado derecho
    targetPosition: Position.Left,  // Recibir desde el lado izquierdo
  },
  {
    id: "2555121",
    position: { x: 0, y: 400 },
    data: { label: <RFNode nombre="Geometría Vectorial y Analítica" creditos={3} /> },  // Handles enabled
    sourcePosition: Position.Right, // Conectar desde el lado derecho
    targetPosition: Position.Left,  // Recibir desde el lado izquierdo
  },
  {
    id: "2555131",
    position: { x: 0, y: 500 },
    data: { label: <RFNode nombre="Cálculo Diferencial" creditos={3} /> },  // Handles enabled
    sourcePosition: Position.Right, // Conectar desde el lado derecho
    targetPosition: Position.Left,  // Recibir desde el lado izquierdo
  },
  {
    id: "2555101",
    position: { x: 0, y: 600 },
    data: { label: <RFNode nombre="Álgebra y Trigonometría" creditos={3} /> },  // Handles enabled
    sourcePosition: Position.Right, // Conectar desde el lado derecho
    targetPosition: Position.Left,  // Recibir desde el lado izquierdo
  },
  {
    id: "2537101",
    position: { x: 0, y: 700 },
    data: { label: <RFNode nombre="Vivamos la Universidad" creditos={1} /> },  // Handles enabled
    sourcePosition: Position.Right, // Conectar desde el lado derecho
    targetPosition: Position.Left,  // Recibir desde el lado izquierdo
  },
  {
    id: "9025101",
    position: { x: 0, y: 800 },
    data: { label: <RFNode nombre="Inglés I" creditos={2} /> },  // Handles enabled
    sourcePosition: Position.Right, // Conectar desde el lado derecho
    targetPosition: Position.Left,  // Recibir desde el lado izquierdo
  },
  // Nivel 2
  {
    id: "n2banner",
    position: { x: 200, y: 100 },
    data: { label: <RFNode nombre="Nivel 2" creditos={0} noHandles={true} /> },  // No handles
    // No need for sourcePosition or targetPosition
  },
  {
    id: "2508207",
    position: { x: 200, y: 200 },
    data: { label: <RFNode nombre="Matemáticas Discretas I" creditos={3} /> },  // Handles enabled
    sourcePosition: Position.Right, // Conectar desde el lado derecho
    targetPosition: Position.Left,  // Recibir desde el lado izquierdo
  },
  {
    id: "2508208",
    position: { x: 200, y: 300 },
    data: { label: <RFNode nombre="Lógica y Representación I" creditos={3} /> },  // Handles enabled
    sourcePosition: Position.Right, // Conectar desde el lado derecho
    targetPosition: Position.Left,  // Recibir desde el lado izquierdo
  },
  {
    id: "2555221",
    position: { x: 200, y: 400 },
    data: { label: <RFNode nombre="Álgebra Lineal" creditos={3} /> },  // Handles enabled
    sourcePosition: Position.Right, // Conectar desde el lado derecho
    targetPosition: Position.Left,  // Recibir desde el lado izquierdo
  },
  {
    id: "2555231",
    position: { x: 200, y: 500 },
    data: { label: <RFNode nombre="Cálculo Integral" creditos={3} /> },  // Handles enabled
    sourcePosition: Position.Right, // Conectar desde el lado derecho
    targetPosition: Position.Left,  // Recibir desde el lado izquierdo
  },
  {
    id: "2539101",
    position: { x: 200, y: 700 },
    data: { label: <RFNode nombre="Lectoescritura" creditos={3} /> },  // Handles enabled
    sourcePosition: Position.Right, // Conectar desde el lado derecho
    targetPosition: Position.Left,  // Recibir desde el lado izquierdo
  },
  {
    id: "9025102",
    position: { x: 200, y: 800 },
    data: { label: <RFNode nombre="Inglés II" creditos={2} /> },  // Handles enabled
    sourcePosition: Position.Right, // Conectar desde el lado derecho
    targetPosition: Position.Left,  // Recibir desde el lado izquierdo
  },
];
