import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Note } from "../shared/note.model";

@Injectable({providedIn: 'root'})
export class NoteService {
  notesChanged = new Subject<Note[]>();
  startedEditing = new Subject<number>();

  private notes: Note[] = [
    new Note('First Entry', 'Start journaling!')
  ];

  getNotes() {
    return this.notes.slice();
  }

  getNote(index: number) {
    return this.notes[index];
  }

  addNote(note: Note) {
    this.notes.push(note);
    this.notesChanged.next(this.notes.slice());
  }

  addNotes(notes: Note[]) {
    this.notes.push(...notes);
    this.notesChanged.next(this.notes.slice());
  }

  updateNote(index: number, newNote: Note) {
    this.notes[index] = newNote;
    this.notesChanged.next(this.notes.slice());
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.notesChanged.next(this.notes.slice());
  }
}
