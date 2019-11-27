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

  add(): void {
    console.log("Test");
    let date = new Date();
    console.log(date);
    //need to check that the
    this.entryService.addEntry({ date } as Entry)
        .subscribe(entry => {
          this.entries.push(entry);
        });
}

}
