import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Modal } from '../../models/modal.model';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent {
  @ViewChild('modalContainer', { read: ViewContainerRef })
  private modalContainer: ViewContainerRef;

  private readonly componentFactoryResolver: ComponentFactoryResolver;

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    this.componentFactoryResolver = componentFactoryResolver;
  }

  createModal<T extends Modal>(modal: Type<T>): ComponentRef<T> {
    this.modalContainer.clear();

    const modalFactory: ComponentFactory<T> = this.componentFactoryResolver.resolveComponentFactory(modal);

    return this.modalContainer.createComponent(modalFactory);
  }
}
