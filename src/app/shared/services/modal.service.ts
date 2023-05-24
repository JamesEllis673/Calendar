import { Injectable } from '@angular/core';
import { IModalComponent } from '../../components/modals/interfaces/modal.component.interface';

@Injectable({ providedIn: 'root'})
export class ModalService {
  private openModal: IModalComponent;

  public open(modal: IModalComponent): void {
    this.openModal = modal;

    this.openModal.open();
  }

  public close(): void {
    this.openModal?.close();
    this.openModal = null;
  }
}
