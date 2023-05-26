import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, computed, Input, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { take } from 'rxjs';
import { EventCachingService } from '../../shared/services/event-caching/event-caching.service';
import { ModalService } from '../../shared/services/modal/modal.service';
import { ModalRef } from '../../shared/services/modal/models/model-ref.model';
import { EventDataModel, EventDataModelWithKey } from '../../shared/types/event-data/event-data-model';
import { AddEventModalComponent } from '../modals/add-event-modal/add-event-modal.component';
import { DayInfoModalComponent } from '../modals/day-info-modal/day-info-modal.component';

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
export class DateComponent implements OnInit {
  @Input()
  public dateDisplayDate: Date;

  @Input()
  public dateCurrentDate: Date;

  @Input()
  public dateMonthToDisplay: Date;

  public events: WritableSignal<Array<EventDataModelWithKey>> = signal(new Array<EventDataModelWithKey>());
  public eventsToDisplay: Signal<Array<EventDataModel>>;

  private readonly modalService: ModalService;
  private readonly eventCachingService: EventCachingService;

  constructor(
    modalService: ModalService,
    eventCachingService: EventCachingService
  ) {
    this.modalService = modalService;
    this.eventCachingService = eventCachingService;
  }

  public ngOnInit(): void {
    this.events.set(this.eventCachingService.getCachedDataForDate(this.dateDisplayDate.toDateString()));
    this.eventsToDisplay = computed(() => this.events().slice(0, 3).map((eventWithKey: EventDataModelWithKey) => eventWithKey.event));
  }

  public isInDisplayMonth(date: Date): boolean {
    return date.getMonth() === this.dateMonthToDisplay.getMonth();
  }

  public isCurrentDate(date: Date): boolean {
    return date.getDate() === this.dateCurrentDate.getDate() && date.getMonth() === this.dateCurrentDate.getMonth();
  }

  public openModal(date: Date, events: Array<EventDataModelWithKey>): void {
    let modal: ModalRef;

    if (events.length) {
      modal = this.modalService.open(DayInfoModalComponent, { date, events });
    } else {
      modal = this.modalService.open(AddEventModalComponent, { date });
    }

    modal.onSave.pipe(take(1)).subscribe(() => {
      this.events.set(this.eventCachingService.getCachedDataForDate(this.dateDisplayDate.toDateString()));
    })
  }
}
