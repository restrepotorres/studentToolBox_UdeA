import type { Dispatch, SetStateAction } from "react";

export interface Subject {
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
export interface SubjectFull {
  id: string;
  name: string;
  prerequisites: string[];
  corequisites: string[];
  credits: number;
  level: number;
  summary: string;
  hoursWeek: number;
  usefulResource: recursos;
  tips: string[];
  version: number;
  area: string;
  state: boolean;
}

export interface recursos {
  libro: string[] | null;
  video: string[] | null;
  pdf: string[] | null;
}

export interface SubjectFullProps {
  subjectFull: SubjectFull | undefined;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface InfoCardProps {
  text: string;
  backText: string;
  link: string;
}
