import { AppState } from '../../app.state';
import { Note } from '../model/note';
import * as NoteAction from './../action/note.action';

const initialState = {
  noteId: 0,
  note: [],
};

export function reducer(
  state: AppState = initialState,
  action: NoteAction.Actions
) {
  let notes: Note[] = [];
  switch (action.type) {
    case NoteAction.ADD_NOTE:
      return { ...state, note: [...state.note, action.note] };
    case NoteAction.REMOVE_NOTE:
      notes = state.note.filter((note) => note.id != action.id);
      state = { ...state, note: notes };
      return state;
    case NoteAction.UPDATE_NOTE:
      notes = state.note.map((note) =>
        note.id === action.note.id
          ? { ...note, content: action.note.content, likes: action.note.likes }
          : note
      );
      state = { ...state, note: notes };
      return state;
    case NoteAction.UPDATE_NOTE_ID:
      state = { ...state, noteId: state.noteId + 1 };
    default:
      return state;
  }
}
