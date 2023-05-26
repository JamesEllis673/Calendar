import {ApplicationRef, ComponentFactory, ComponentFactoryResolver, Injectable, Type} from '@angular/core';
import {ModalContainerComponent} from './components/modal-container/modal-container.component';
import {Modal} from './models/modal.model';
import {ModalRef} from './models/model-ref.model';

@Injectable({ providedIn: 'root' })
export class ModalService {

  private modalContainer: HTMLElement;
  private modalContainerFactory: ComponentFactory<ModalContainerComponent>;

  private readonly componentFactoryResolver: ComponentFactoryResolver;
  private readonly applicationRef: ApplicationRef;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    applicationRef: ApplicationRef
  ) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.applicationRef = applicationRef;
    this.setupModalContainerFactory();
  }

  open<T extends Modal>(component: Type<T>, inputs?: any): ModalRef {
    this.setupModalContainerDiv();

    const modalContainerRef = this.applicationRef.bootstrap(this.modalContainerFactory, this.modalContainer);
    const modalComponentRef = modalContainerRef.instance.createModal(component);

    if (inputs) {
      modalComponentRef.instance.onInjectInputs(inputs);
    }

    return new ModalRef(modalContainerRef, modalComponentRef);
  }

  private setupModalContainerDiv(): void {
    this.modalContainer = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(this.modalContainer);
  }

  private setupModalContainerFactory(): void {
    this.modalContainerFactory = this.componentFactoryResolver.resolveComponentFactory(ModalContainerComponent);
  }

}
