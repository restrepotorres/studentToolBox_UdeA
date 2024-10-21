import { Position } from 'reactflow';
import RFNode from './ReactFlowNode';
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

let banners: Subject[] = [
  {
    id: "1",
    name: "Nivel 1 ",
    prerequisites: [],
    corequisites: [],
    credits: 0,
    level: 2,
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
    area: "info",
    state: true,
  }

]
export const initialNodes = [
  // Nivel 1
  {
    id: "n1banner",
    position: { x: 0, y: 100 },
    data: { label: <RFNode subject={banners[0]} noHandles={true} /> },  // No handles
    // No need for sourcePosition or targetPosition
  },
  {
    id: "n2banner",
    position: { x: 300, y: 100 },
    data: { label: <RFNode subject={banners[1]} noHandles={true} /> },  // No handles
    // No need for sourcePosition or targetPosition
  },
 
];
