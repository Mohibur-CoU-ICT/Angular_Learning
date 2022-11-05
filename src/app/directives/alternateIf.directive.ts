import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAlternateIf]'
})
export class AlternateIfDirective implements OnChanges {

  @Input() appAlternateIf!: boolean;

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.appAlternateIf) {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else {
      this.vcRef.clear();
    }
  }

}