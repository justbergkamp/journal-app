import { Injectable } from '@angular/core';
import { Entry } from './entry';
import { ENTRIES } from './mock-entries';
import { Observable, of } from 'rxjs';


@Injectable({  providedIn: 'root'})
export class EntryService {

  constructor() { }

  getEntries(): Observable <Entry[]> {
    return of(ENTRIES);
  }

  getEntry(id: number): Observable<Entry> {
    return of(ENTRIES.find(entry => entry.id === id));
  }




}
