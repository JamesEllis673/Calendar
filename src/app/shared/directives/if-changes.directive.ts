import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfChanges]'
})
export class IfChangesDirective {
  private currentValue: any;
  private readonly viewContainerRef: ViewContainerRef;
  private readonly templateRef: TemplateRef<any>;

  constructor(
    viewContainerRef: ViewContainerRef,
    templateRef: TemplateRef<any>
  ) {
    this.viewContainerRef = viewContainerRef;
    this.templateRef = templateRef;
  }

  @Input() set appIfChanges(value: any) {
    if (this.currentValue !== value) {
      this.currentValue = value;
      this.viewContainerRef.clear();
      setTimeout(() => this.viewContainerRef.createEmbeddedView(this.templateRef), 300);
    }
  }
}
