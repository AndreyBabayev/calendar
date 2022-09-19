import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker'
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import * as _moment from 'moment';
const moment = _moment;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe]
})
export class AppComponent {

  selected: Date | null = null;
  arrayData: any[] = [];
  titleEvent: string = "";
  discriptionEvent: string = "";
  // startTime: number = "";
  // endTime: number = "";

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.arrayData, event.previousIndex, event.currentIndex);
  }
    
  constructor(public datepipe: DatePipe) {
  }
  saveDate() {
    if(this.titleEvent===""&&this.discriptionEvent===""&&this.selected===null){
      return
    }
       this.arrayData.push(
          {value: this.datepipe.transform(this.selected, 'M/d/yy'), 
    titleEvent:this.titleEvent,
    discriptionEvent:this.discriptionEvent
    }
    )
    console.log(this.arrayData);
  }
  changeCalend() {

    console.log(this.datepipe.transform(this.selected, 'M/d/yy'))
  }
  deleteCard(i:number){
    this.arrayData.splice(i,1)
        console.log(i);
    
  }

}


