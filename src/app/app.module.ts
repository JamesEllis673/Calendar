import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfChangesDirective } from './shared/directives/if-changes.directive';
import { MonthPickerComponent } from './components/month-picker/month-picker.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { DateComponent } from './components/date/date.component';
import { AddEventModalComponent } from './components/modals/add-event-modal/add-event-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthPickerComponent,
    IfChangesDirective,
    CalendarViewComponent,
    DateComponent,
    AddEventModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
