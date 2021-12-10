import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/shared/note.model';
import { NoteService } from '../display-notes.service';

@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit, OnDestroy {
  notes: Note[];
  private changeSub: Subscription;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
    this.changeSub = this.noteService.notesChanged.subscribe(
      (notes: Note[]) => {
        this.notes = notes;
      }
    );
  }

  onEditItem(index: number) {
    this.noteService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
      this.changeSub.unsubscribe();
  }

}
