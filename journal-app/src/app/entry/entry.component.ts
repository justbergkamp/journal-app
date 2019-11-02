import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Entry } from '../entry';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.less']
})
export class EntryComponent implements OnInit {

  entry: Entry;

  constructor(
    private route: ActivatedRoute,
    private entryService: EntryService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getEntry();
  }

  getEntry(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.entryService.getEntry(id)
      .subscribe(entry => this.entry = entry);
  }

  goBack(): void {
    this.location.back();
  }

}
