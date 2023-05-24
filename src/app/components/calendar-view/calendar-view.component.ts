import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarViewComponent implements OnChanges {
  @Input()
  public calendarViewCurrentDate: Date;

  @Input()
  public calendarViewMonthToDisplay: Date;

  public days: Array<string> = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  public datesToDisplay: Array<Date> = new Array<Date>();

  public ngOnChanges(): void {
    this._getDaysToDisplay();
  }

  private _getDaysToDisplay(): void {
    const dateToDisplay: Date = new Date();
    const firstDayOfDisplayMonth = new Date(this.calendarViewMonthToDisplay);
    this.datesToDisplay = new Array<Date>();

    firstDayOfDisplayMonth.setDate(1);
    dateToDisplay.setMonth(firstDayOfDisplayMonth.getMonth());
    dateToDisplay.setDate(firstDayOfDisplayMonth.getDate() - firstDayOfDisplayMonth.getDay());

    while (dateToDisplay.getMonth() <= firstDayOfDisplayMonth.getMonth() || this.datesToDisplay.length < 42) {
      this.datesToDisplay.push(new Date(dateToDisplay));
      dateToDisplay.setDate(dateToDisplay.getDate() + 1);
    }
  }
}
