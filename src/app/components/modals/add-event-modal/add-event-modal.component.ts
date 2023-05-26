import { Component } from '@angular/core';
import { EventCachingService } from '../../../shared/services/event-caching/event-caching.service';
import { Modal } from '../../../shared/services/modal/models/modal.model';
import { EventDataModel, EventImportanceLevel } from '../../../shared/types/event-data/event-data-model';

export type AddEventModalConfig = {
  date: Date;
};

@Component({
  selector: 'app-add-event-modal',
  templateUrl: './add-event-modal.component.html',
  styleUrls: ['./add-event-modal.component.scss']
})
export class AddEventModalComponent extends Modal {
  public addEventModalDate: Date;
  public event: EventDataModel;
  public importanceLevels: typeof EventImportanceLevel = EventImportanceLevel;

  private readonly eventCachingService: EventCachingService;

  constructor(eventCachingService: EventCachingService) {
    super();
    this.eventCachingService = eventCachingService;
  }

  public onInjectInputs(inputs: AddEventModalConfig): void {
    this.addEventModalDate = inputs.date;
    this.event = {
      name: '',
      importance: EventImportanceLevel.Low,
      date: this.addEventModalDate.toDateString()
    };
  }
}
