import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '.appHighlightText'
})
export class HighlightTextDirective implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    (this.element.nativeElement as HTMLElement).style.background = 'red';
  }

}