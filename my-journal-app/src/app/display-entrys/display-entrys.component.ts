import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserInput } from '../start/start-page/userinput.model';

@Component({
  selector: 'app-display-entrys',
  templateUrl: './display-entrys.component.html',
  styleUrls: ['./display-entrys.component.css']
})
export class DisplayEntrysComponent implements OnInit {
  theEntrys = new Subject<UserInput[]>();

  private entrys: UserInput[] = [
    new UserInput('hey', 'hello')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getEntrys() {
    return this.entrys.slice();
  }

  addEntrys(entrys: UserInput[]) {
    this.entrys.push(...entrys);
  }

}

/*shorten a big text with pipes

import pipe, pipetransform

@Pipe({
  name:'shorten'

  export class implements Pipetransform {
    transform(value: any) {
      if(value.length > 15) {
        return value.substr(0,15) + ' ...';
      }
      return value;
    }
  }

  HTML;

  {{ desc | shorten }}
})
*/
