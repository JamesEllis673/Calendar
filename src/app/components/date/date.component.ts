import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';
import { AddEventModalComponent } from '../modals/add-event-modal/add-event-modal.component';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', [animate('0.6s ease-in-out')])
    ])
  ]
})
export class DateComponent  {
  @Input()
  public dateDisplayDate: Date;

  @Input()
  public dateCurrentDate: Date;

  @Input()
  public dateMonthToDisplay: Date;

  private readonly modalService: ModalService;

  constructor(modalService: ModalService) {
    this.modalService = modalService;
  }

  public isInDisplayMonth(date: Date): boolean {
    return date.getMonth() === this.dateMonthToDisplay.getMonth();
  }

  public isCurrentDate(date: Date): boolean {
    return date.getDate() === this.dateCurrentDate.getDate() && date.getMonth() === this.dateCurrentDate.getMonth();
  }

  public openModal(date: Date): void {
    this.modalService.open(AddEventModalComponent, { date });
  }
}
