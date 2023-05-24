import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfChangesDirective } from './shared/directives/if-changes.directive';
import { MonthPickerComponent } from './month-picker/month-picker.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthPickerComponent,
    IfChangesDirective,
    CalendarViewComponent,
    DateComponent
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
