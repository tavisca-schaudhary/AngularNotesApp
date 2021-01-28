import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Note, NoteType } from '../store/model/note';
import * as NoteActions from '../store/action/note.action';

@Component({
  selector: 'app-ideaboard',
  templateUrl: './ideaboard.component.html',
  styleUrls: ['./ideaboard.component.css']
})
export class IdeaboardComponent implements OnInit {
  _state$: Observable<any>;
  noteId: number;
  colCode: string;
  constructor(private store: Store<AppState>) {
    this._state$ = store.select('note');
  }

  addNote(type: string) {
    this.store.dispatch(
      new NoteActions.AddNote(this.getEmptyNoteWithType(type)));
  }

  private getEmptyNoteWithType(type: string) {
    this.store.dispatch(new NoteActions.UpdateNoteId());
    switch (type) {
      case 'A':
        this.colCode = "first-title";
        break;
      case 'B':
        this.colCode = "second-title";
        break;
      case 'C':
        this.colCode = "third-title";
        break;
    }
    return {
      id: this.noteId,
      type: NoteType[type],
      content: '',
      likes: 0,
      colorClass: this.colCode
    };
  }

  ngOnInit(): void {
    this._state$.subscribe((data) => {
      this.noteId = data.noteId;
    });
  }

  isTypeValid(noteType, type) {
    return noteType == type;
  }

  trackByNoteId(index: number, note: any) {
    return note.id;
  }
}
