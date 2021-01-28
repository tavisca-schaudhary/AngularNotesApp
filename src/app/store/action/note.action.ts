import { Action } from '@ngrx/store';
import { Note } from '../model/note';

export const ADD_NOTE = '[NOTE] Add';

export const REMOVE_NOTE = '[NOTE] Remove';

export const UPDATE_NOTE = '[NOTE] Update';

export const UPDATE_NOTE_ID = '[NOTE] Update Note ID';

export class AddNote implements Action {
  readonly type = ADD_NOTE;
  constructor(public note: Note) {}
}

export class RemoveNote implements Action {
  readonly type = REMOVE_NOTE;
  constructor(public id: number) {}
}
export class UpdateNote implements Action {
  readonly type = UPDATE_NOTE;
  constructor(public note: Note) {}
}

export class UpdateNoteId implements Action {
  readonly type = UPDATE_NOTE_ID;
  constructor() {}
}

export type Actions = AddNote | RemoveNote | UpdateNote | UpdateNoteId;
