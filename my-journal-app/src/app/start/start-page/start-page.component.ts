import { Component, Injectable, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NoteService } from 'src/app/display/display-notes.service';
import { Note } from '../../shared/note.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit, OnDestroy{
  @ViewChild('f') myForm: NgForm;
  sub: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Note;//args from note.model.ts



   constructor(private noteService: NoteService) {}

   ngOnInit(): void {
    this.sub = this.noteService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.noteService.getNote(index);
        this.myForm.setValue({
          title: this.editedItem.title,
          desc: this.editedItem.desc
        });
      }
    );
   }

   onAddNote(form: NgForm) {
    const value = form.value;
    const newNote = new Note(value.title, value.desc);

    if(this.editMode) {
      this.noteService.updateNote(this.editedItemIndex, newNote);
    } else {
      this.noteService.addNote(newNote);
    }
    this.editMode = false;
    form.reset();
   }

   onClear() {
    this.myForm.reset();
    this.editMode = false;
   }

   onDelete() {
    this.noteService.deleteNote(this.editedItemIndex);
    this.onClear();
   }

   ngOnDestroy(): void {
    this.sub.unsubscribe();
   }


  // datas = {
  //   title: '',
  //   desc: ''
  // }

  // onSave() {
  //   this.datas.title = this.myForm.value.title;
  //   this.datas.desc = this.myForm.value.desc;
  // }

}
