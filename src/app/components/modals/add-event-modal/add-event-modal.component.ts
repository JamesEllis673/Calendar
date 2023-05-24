import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { IModalComponent } from '../interfaces/modal.component.interface';

@Component({
  selector: 'app-add-event-modal',
  templateUrl: './add-event-modal.component.html',
  styleUrls: ['./add-event-modal.component.scss']
})
export class AddEventModalComponent implements IModalComponent {
  @Input()
  public addEventModalDate: Date;

  private readonly element: any;

  constructor(elementRef: ElementRef, private renderer: Renderer2) {
    this.element = elementRef.nativeElement;
  }

  public open(): void {
    this.renderer.appendChild(document.body, this.element);
  }

  public close(): void {
    this.renderer.removeChild(document.body, this.element);
  }
}
