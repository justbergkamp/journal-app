import { Injectable } from '@angular/core';
import { Entry } from './entry';
import { ENTRIES } from './mock-entries';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({  providedIn: 'root'})
export class EntryService {

  constructor(
    private http: HttpClient,
  ) { }

  private entriesURL = 'api/entries';  // URL to web api


  getEntries(): Observable <Entry[]> {
    return this.http.get<Entry[]>(this.entriesURL)
  }

  getEntry(id: number): Observable<Entry> {
    const url = `${this.entriesURL}/${id}`;
    return this.http.get<Entry>(url)
  }




}
