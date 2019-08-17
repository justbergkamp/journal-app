import { Injectable } from '@angular/core';
import { ENTRIES } from './mock-entries';
import { Entry } from './classes/entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor() { }

  getEntries(): Entry[] {
    return ENTRIES;
  }
}
