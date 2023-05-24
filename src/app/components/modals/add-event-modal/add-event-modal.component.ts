import { Component } from '@angular/core';
import { Modal } from '../../../shared/services/modal-service/models/modal.model';

type AddEventModalConfig = {
  date: Date;
};

@Component({
  selector: 'app-add-event-modal',
  templateUrl: './add-event-modal.component.html',
  styleUrls: ['./add-event-modal.component.scss']
})
export class AddEventModalComponent extends Modal {
  public addEventModalDate: Date;

  public onInjectInputs(inputs: AddEventModalConfig): void {
    this.addEventModalDate = inputs.date;
    console.log(this.addEventModalDate);
  }
}
