import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Entry } from './entry';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const entries = [
      { id: 1, date: new Date("06/25/1996"), content: 'first post'  },
      { id: 2, date: new Date("08/03/1996"), content: 'second post' },
      { id: 3, date: new Date("12/25/2001"), content: 'thrid post' },
      { id: 4, date: new Date("03/25/1996"), content: 'fourth post'  }
    ];
    return {entries};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(entries: Entry[]): number {
    return entries.length > 0 ? Math.max(...entries.map(entry => entry.id)) + 1 : 11;
  }
}
