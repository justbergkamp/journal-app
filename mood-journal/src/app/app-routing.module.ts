import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarEntriesComponent } from './calendar-entries/calendar-entries.component';
import { DailyEntryComponent } from './daily-entry/daily-entry.component';


const routes: Routes = [
  { path: 'calendar', component: CalendarEntriesComponent },
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'daily/:id', component: DailyEntryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
