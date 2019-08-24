import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { Entry } from '../classes/entry';


@Component({
  selector: 'app-calendar-entries',
  templateUrl: './calendar-entries.component.html',
  styleUrls: ['./calendar-entries.component.scss']
})
export class CalendarEntriesComponent implements OnInit {

  entries: Entry[];

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.getEntries();
  }
  getEntries(): void {
  this.entryService.getEntries()
      .subscribe(entries => this.entries = entries);
    }

  selectedEntry: Entry;
  onSelect(entry: Entry): void {
    this.selectedEntry = entry;
  }

}
