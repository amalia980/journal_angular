import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-journal-app';
  myForm: NgForm;

  constructor() { }

  ngOnInit(): void {

  }

  //user input values
  //  data = {
  //    title: '',
  //    desc: ''
  //  };

  // onSave() {
  //   this.datas.title = this.myForm.value.title;
  //   this.datas.desc = this.myForm.value.desc;
  //   console.log(this.myForm);

  //   this.myForm.reset();
  // }

  onSave(form: NgForm) {

  }

}
