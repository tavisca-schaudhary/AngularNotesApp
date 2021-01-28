import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Note } from '../store/model/note';
import * as NoteActions from '../store/action/note.action';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;
  content: string;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
  }

  updateLikeCount() {
    this.note = { ...this.note, likes: this.note.likes + 1 };
    this.updateNote();
  }

  updateNoteText() {
    this.note = { ...this.note, content: this.content };
    this.updateNote();
  }

  updateNote() {
    this.store.dispatch(new NoteActions.UpdateNote(this.note));
  }

  deleteNote() {
    this.store.dispatch(new NoteActions.RemoveNote(this.note.id));
  }
}
