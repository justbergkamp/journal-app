import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-entry',
  templateUrl: './daily-entry.component.html',
  styleUrls: ['./daily-entry.component.scss']
})
export class DailyEntryComponent implements OnInit {
  hero = "hello";
  dateNow : Date = new Date();


  constructor() { }

  ngOnInit() {
    
  }


}
