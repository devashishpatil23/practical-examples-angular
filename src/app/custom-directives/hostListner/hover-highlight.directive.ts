import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
})
export class HoverHighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // exapmple 2
  @HostListener('mouseenter', ['$event'])
  onMouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave', ['$event']) onMouseLeave() {
    this.highlight('transparent');
  }

  private highlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
