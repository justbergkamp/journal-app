import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyEntryComponent } from './daily-entry/daily-entry.component';
import { CalendarEntriesComponent } from './calendar-entries/calendar-entries.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyEntryComponent,
    CalendarEntriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
