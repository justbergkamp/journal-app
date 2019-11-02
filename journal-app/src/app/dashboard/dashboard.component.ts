import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { Entry } from '../entry';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private entryService: EntryService) { }
  entries: Entry[];


  ngOnInit() {
    this.getEntries();
  }

  getEntries(): void {
    this.entryService.getEntries()
       .subscribe(entries => this.entries = entries);
}

}
