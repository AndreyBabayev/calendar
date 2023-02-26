import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
  startTime: any;
  endTime: any;
  openWindowEvent: boolean = false;
  dataForm: FormGroup

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.arrayData, event.previousIndex, event.currentIndex);
  }
  constructor(public datepipe: DatePipe,
    private formBuilder: FormBuilder) {

    this.dataForm = formBuilder.group({
      "addTitle": [''],
      "addDisc": ['']
    })
  }
  saveDate() {
    const value = this.dataForm.getRawValue();
    console.log(value);
    value.selected = this.datepipe.transform(this.selected, 'M/d/yy');
    value.startTime = this.startTime;
    value.endTime = this.endTime;

    if (!value.addTitle || !value.addDisc) {
      return
    } else {
      this.arrayData.push(value)
      console.log(this.arrayData)
      this.dataForm.reset()
    }
  }
  changeCalend(event: any) {
    if (event !== null) {
      this.openWindowEvent = true
    }
    console.log(this.datepipe.transform(this.selected, 'M/d/yy'))
  }
  deleteCard(i: number) {
    this.arrayData.splice(i, 1)
    console.log(i);
  }
  onStartTime(event: any) {
    this.startTime = event
    console.log(event);
  }
  onEndTime(event: any) {
    this.endTime = event
    console.log(event);
  }


}






