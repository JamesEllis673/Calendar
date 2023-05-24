import { ComponentRef } from '@angular/core';
import { ModalContainerComponent } from '../components/modal-container/modal-container.component';
import { Modal } from './modal.model';

export class ModalRef {
  private readonly modalContainer: ComponentRef<ModalContainerComponent>;
  private readonly modal: ComponentRef<Modal>;

  constructor(
    modalContainer: ComponentRef<ModalContainerComponent>,
    modal: ComponentRef<Modal>,
  ) {
    this.modalContainer = modalContainer;
    this.modal = modal;
    this.modal.instance.modalInstance = this;
  }

  close(): void {
    this.modal.destroy();
    this.modalContainer.destroy();
  }
}
