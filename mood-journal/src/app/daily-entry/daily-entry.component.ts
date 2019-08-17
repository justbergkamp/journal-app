import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../classes/entry';


@Component({
  selector: 'app-daily-entry',
  templateUrl: './daily-entry.component.html',
  styleUrls: ['./daily-entry.component.scss']
})

export class DailyEntryComponent implements OnInit {

  entryTitle = "hello";
  dateNow : Date = new Date();

  @Input() entry: Entry;

  constructor() { }

  ngOnInit() {

  }


}
