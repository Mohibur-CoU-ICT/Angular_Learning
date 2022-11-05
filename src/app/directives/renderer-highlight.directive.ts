import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }

  @HostListener('mouseover') onMouseOver() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
  }
  
  @HostListener('click') onClick() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
  }
}
