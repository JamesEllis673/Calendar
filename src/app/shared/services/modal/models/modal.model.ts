import { ModalRef } from './model-ref.model';

export abstract class Modal {
  modalInstance: ModalRef;

  abstract onInjectInputs(inputs: any): void;

  close(): void {
    this.modalInstance.close();
  }

  save(): void {
    this.modalInstance.save();
  }
}
