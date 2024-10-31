import { Background, Position } from 'reactflow';
import RFNode from './ReactFlowNode';
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

let banners: Subject[] = [
  {
    id: "1",
    name: "Nivel 1 ",
    prerequisites: [],
    corequisites: [],
    credits: 0,
    level: 1,
    version: 0,
    area: "info",
    state: true,
  },
  {
    id: "1",
    name: "Nivel 2 ",
    prerequisites: [],
    corequisites: [],
    credits: 0,
    level: 2,
    version: 0,
    area: "info",
    state: true,
  },
  {
    id: "1",
    name: "Nivel 3 ",
    prerequisites: [],
    corequisites: [],
    credits: 0,
    level: 3,
    version: 0,
    area: "info",
    state: true,
  }

]
export const initialNodes = [
  // Nivel 1
  {
    id: "n1banner",
    position: { x: 0, y: 0 },
    data: { label: <RFNode subject={banners[0]} noHandles={true} /> },  // No handles
    style: {background: "gray", borderColor: "red", borderWidth: 2}
    // No need for sourcePosition or targetPosition
  },
  {
    id: "n2banner",
    position: { x: 300, y: 0 },
    data: { label: <RFNode subject={banners[1]} noHandles={true} /> },  // No handles
    // No need for sourcePosition or targetPosition
  },
  {
    id: "n3banner",
    position: { x: 600, y: 0 },
    data: { label: <RFNode subject={banners[2]} noHandles={true} /> },  // No handles
    // No need for sourcePosition or targetPosition
  },
 
];
