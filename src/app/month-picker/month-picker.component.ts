import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-month-picker',
  templateUrl: './month-picker.component.html',
  styleUrls: ['./month-picker.component.scss'],
  animations: [
    trigger('pickerTextChanged', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', [animate('0.3s ease-in-out')]),
      transition('* => void', [animate('0.3s ease-in-out')])
    ])
  ]
})
export class MonthPickerComponent implements OnInit {
  @Input()
  public monthPickerCurrentDate: Date;

  @Output()
  public monthPickerMonthUpdated: EventEmitter<Date> = new EventEmitter<Date>();

  public dateToDisplay: Date;
  public formattedDateToDisplay: string;

  public ngOnInit(): void {
    this.dateToDisplay = new Date(this.monthPickerCurrentDate);
    this.formattedDateToDisplay = this.dateToDisplay.toDateString();
  }

  public navigateToPreviousMonth(): void {
    this.dateToDisplay.setMonth(this.dateToDisplay.getMonth() - 1);
    this.updateMonth();
  }

  public navigateToNextMonth(): void {
    this.dateToDisplay.setMonth(this.dateToDisplay.getMonth() + 1);
    this.updateMonth();
  }

  private updateMonth(): void {
    this.formattedDateToDisplay = this.dateToDisplay.toDateString();
    this.monthPickerMonthUpdated.emit(new Date(this.dateToDisplay));
  }
}
