import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-month-picker',
  template: ''
})
export class MonthPickerComponentStub {
  @Input()
  public monthPickerCurrentDate: Date;

  @Output()
  public monthPickerMonthUpdated: EventEmitter<Date> = new EventEmitter<Date>();
}
