import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateComponent  {
  @Input()
  public dateDisplayDate: Date;

  @Input()
  public dateCurrentDate: Date;

  @Input()
  public dateMonthToDisplay: Date;

  public isInDisplayMonth(date: Date): boolean {
    return date.getMonth() === this.dateMonthToDisplay.getMonth();
  }

  public isCurrentDate(date: Date): boolean {
    return date.getDate() === this.dateCurrentDate.getDate() && date.getMonth() === this.dateCurrentDate.getMonth();
  }
}
