import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventCachingService } from '../../shared/services/event-caching/event-caching.service';
import { EventDataModelWithKey } from '../../shared/types/event-data/event-data-model';

@Component({
  selector: 'app-day-info-modal-event',
  templateUrl: './day-info-modal-event.component.html',
  styleUrls: ['./day-info-modal-event.component.scss']
})
export class DayInfoModalEventComponent {
  @Input()
  public dayInfoModalEventDataModel: EventDataModelWithKey

  @Output()
  public eventDeleted: EventEmitter<void> = new EventEmitter<void>();

  private readonly eventCachingService: EventCachingService;

  constructor(eventCachingService: EventCachingService) {
    this.eventCachingService = eventCachingService;
  }

  public deleteEvent(): void {
    this.eventCachingService.deleteData(this.dayInfoModalEventDataModel.key);
    this.eventDeleted.emit();
  }
}
