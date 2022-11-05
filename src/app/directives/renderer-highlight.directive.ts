import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') color!: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }

  @HostListener('mouseover') onMouseOver() {
    this.color = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = 'green';
  }
  
  @HostListener('click') onClick() {
    this.color = 'red';
  }
}
