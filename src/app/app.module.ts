import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfChangesDirective } from './shared/directives/if-changes.directive';
import { MonthPickerComponent } from './components/month-picker/month-picker.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { DateComponent } from './components/date/date.component';
import { AddEventModalComponent } from './components/modals/add-event-modal/add-event-modal.component';
import { ModalContainerComponent } from './shared/services/modal/components/modal-container/modal-container.component';
import { DateEventComponent } from './components/date-event/date-event.component';
import { DayInfoModalComponent } from './components/modals/day-info-modal/day-info-modal.component';
import { DayInfoModalEventComponent } from './components/day-info-modal-event/day-info-modal-event.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthPickerComponent,
    IfChangesDirective,
    CalendarViewComponent,
    DateComponent,
    AddEventModalComponent,
    ModalContainerComponent,
    DateEventComponent,
    DayInfoModalComponent,
    DayInfoModalEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
