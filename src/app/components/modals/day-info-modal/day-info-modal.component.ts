import { ChangeDetectionStrategy, Component } from '@angular/core';
import { take } from 'rxjs';
import { ModalService } from '../../../shared/services/modal/modal.service';
import { Modal } from '../../../shared/services/modal/models/modal.model';
import { ModalRef } from '../../../shared/services/modal/models/model-ref.model';
import { EventDataModelWithKey } from '../../../shared/types/event-data/event-data-model';
import { AddEventModalComponent } from '../add-event-modal/add-event-modal.component';

export type DayInfoModalConfig = {
  date: Date;
  events: Array<EventDataModelWithKey>;
}

@Component({
  selector: 'app-day-info-modal',
  templateUrl: './day-info-modal.component.html',
  styleUrls: ['./day-info-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DayInfoModalComponent extends Modal {
  public dayInfoModalDate: Date;
  public dayInfoModalEvents: Array<EventDataModelWithKey>;
  public shouldUpdateView: boolean = false;

  private readonly modalService: ModalService;

  constructor(modalService: ModalService) {
    super();
    this.modalService = modalService;
  }

  public onInjectInputs(inputs: DayInfoModalConfig): void {
    this.dayInfoModalDate = inputs.date;
    this.dayInfoModalEvents = inputs.events;
  }

  public openAddEventModal(date: Date): void {
    if (this.shouldUpdateView) {
      this.save();
    } else {
      this.close();
    }

    const modal: ModalRef = this.modalService.open(AddEventModalComponent, { date });

    modal.onSave.pipe(take(1)).subscribe(() => this.save());
  }

  public onEventDeleted(event: EventDataModelWithKey): void {
    this.shouldUpdateView = true;
    this.dayInfoModalEvents.splice(this.dayInfoModalEvents.indexOf(event), 1);
  }
}
