import { Note } from './store/model/note';

export interface AppState {
  noteId: number;
  note: Note[];
}
