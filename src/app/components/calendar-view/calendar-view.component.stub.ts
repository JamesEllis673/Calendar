import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-calendar-view',
  template: ''
})
export class CalendarViewComponentStub {
  @Input()
  public calendarViewCurrentDate: Date;

  @Input()
  public calendarViewMonthToDisplay: Date;
}
