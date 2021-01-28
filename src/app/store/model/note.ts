export interface Note {
    id: number;
    content: string;
    likes: number;
    type: NoteType;
    colorClass: string;
  }
  
  export enum NoteType {
    A,
    B,
    C,
  }
  