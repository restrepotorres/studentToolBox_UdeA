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
    id: "2",
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
    id: "3",
    name: "Nivel 3 ",
    prerequisites: [],
    corequisites: [],
    credits: 0,
    level: 3,
    version: 0,
    area: "info",
    state: true,
  },{
    id: "4",
    name: "Nivel 4 ",
    prerequisites: [],
    corequisites: [],
    credits: 0,
    level: 4,
    version: 0,
    area: "info",
    state: true,
  },{
    id: "5",
    name: "Nivel 5 ",
    prerequisites: [],
    corequisites: [],
    credits: 0,
    level: 5,
    version: 0,
    area: "info",
    state: true,
  },{
    id: "6",
    name: "Nivel 6 ",
    prerequisites: [],
    corequisites: [],
    credits: 0,
    level: 6,
    version: 0,
    area: "info",
    state: true,
  },{
    id: "7",
    name: "Nivel 7 ",
    prerequisites: [],
    corequisites: [],
    credits: 0,
    level: 7,
    version: 0,
    area: "info",
    state: true,
  },{
    id: "8",
    name: "Nivel 8 ",
    prerequisites: [],
    corequisites: [],
    credits: 0,
    level: 8,
    version: 0,
    area: "info",
    state: true,
  },{
    id: "9",
    name: "Nivel 9 ",
    prerequisites: [],
    corequisites: [],
    credits: 0,
    level: 9,
    version: 0,
    area: "info",
    state: true,
  },{
    id: "10",
    name: "Nivel 10 ",
    prerequisites: [],
    corequisites: [],
    credits: 0,
    level: 10,
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
  {
    id: "n4banner",
    position: { x: 900, y: 0 },
    data: { label: <RFNode subject={banners[3]} noHandles={true} /> },  // No handles
    // No need for sourcePosition or targetPosition
  },
  {
    id: "n5banner",
    position: { x: 1200, y: 0 },
    data: { label: <RFNode subject={banners[4]} noHandles={true} /> },  // No handles
    // No need for sourcePosition or targetPosition
  },
  {
    id: "n6banner",
    position: { x: 1500, y: 0 },
    data: { label: <RFNode subject={banners[5]} noHandles={true} /> },  // No handles
    // No need for sourcePosition or targetPosition
  },
  {
    id: "n7banner",
    position: { x: 1800, y: 0 },
    data: { label: <RFNode subject={banners[6]} noHandles={true} /> },  // No handles
    // No need for sourcePosition or targetPosition
  },
  {
    id: "n8banner",
    position: { x: 2100, y: 0 },
    data: { label: <RFNode subject={banners[7]} noHandles={true} /> },  // No handles
    // No need for sourcePosition or targetPosition
  },
  {
    id: "n9banner",
    position: { x: 2400, y: 0 },
    data: { label: <RFNode subject={banners[8]} noHandles={true} /> },  // No handles
    // No need for sourcePosition or targetPosition
  },
  {
    id: "n10banner",
    position: { x: 2700, y: 0 },
    data: { label: <RFNode subject={banners[9]} noHandles={true} /> },  // No handles
    // No need for sourcePosition or targetPosition
  },
 
];
