import { Component, Inject, Injectable, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DisplayEntrysComponent } from 'src/app/display-entrys/display-entrys.component';
import { UserInput } from './userinput.model';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit, OnDestroy {
  @ViewChild('f') myForm: NgForm;
  sub: Subscription;
  item: UserInput;


  constructor(private showEntrys: DisplayEntrysComponent) {

   }

  ngOnInit(): void {

  }

  onSave(form: NgForm) {
    const data = form.value;
    const newData = new UserInput(data.title, data.desc);

    //this.showEntrys.addEntrys(newData);
    console.log(newData);
  }

  ngOnDestroy() {

  }

}
