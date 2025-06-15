import { style } from '@angular/animations';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef, renderer: Renderer2) {}
  @Input() bgColor: string = 'transparent';
  @Input() textColor: string = '#000';

  @HostBinding('style') get styles() {
    return {
      backgroundColor: this.bgColor,
      color: this.textColor,
    };
  }

  @HostListener('mouseenter') mouseEnter() {
    this.bgColor = 'black';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.bgColor = 'red';
  }
}
