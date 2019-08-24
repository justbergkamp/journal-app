import { Injectable } from '@angular/core';
import { ENTRIES } from './mock-entries';
import { Entry } from './classes/entry';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private messageService: MessageService) { }

  getEntries(): Observable<Entry[]> {
  this.messageService.add('HeroService: fetched heroes');
  return of(ENTRIES);
}
  entry: Entry = {
    id: 4,
    date: new Date("October 16, 2014"),
    content: 'sada'
  };

  addEntry() {
  }
}
