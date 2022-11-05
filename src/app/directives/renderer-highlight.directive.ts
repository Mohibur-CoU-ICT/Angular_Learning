import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') color: string;
  @Input() mouseOverColor: string = 'blue';
  @Input() mouseLeaveColor: string = 'green';
  @Input() clickColor: string = 'red';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.color = 'grey';
  }

  ngOnInit(): void {

  }

  @HostListener('mouseover') onMouseOver() {
    this.color = this.mouseOverColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = this.mouseLeaveColor;
  }
  
  @HostListener('click') onClick() {
    this.color = this.clickColor;
  }
}
