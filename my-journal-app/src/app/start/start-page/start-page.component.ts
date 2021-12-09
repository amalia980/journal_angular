import { Component, Injectable, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {
  @ViewChild('f') myForm: NgForm;


  constructor() {}

  datas = {
    title: '',
    desc: ''
  }

  onSave() {
    this.datas.title = this.myForm.value.title;
    this.datas.desc = this.myForm.value.desc;
  }

}
