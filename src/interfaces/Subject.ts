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
