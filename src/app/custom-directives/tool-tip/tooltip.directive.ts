import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[Tooltip]',
})
export class TooltipDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input('appToolTip') toolTipContent: string = '';

  createToolTip(): HTMLElement {
    const toolTip = this.renderer.createElement('div');
    const text = this.renderer.createText(this.toolTipContent);
    this.renderer.appendChild(toolTip, text);
    this.renderer.addClass(toolTip, 'tooltip');

    return toolTip;
  }

  @HostListener('mouseover') onMouseOver() {
    const myToolTip = this.createToolTip();
    this.renderer.appendChild(this.el.nativeElement, myToolTip);
  }

  @HostListener('mouseout') onMouseOut() {
    setTimeout(() => {
      const myToolTip = this.el.nativeElement.querySelector('.tooltip');
      this.renderer.removeChild(this.el.nativeElement, myToolTip);
    }, 500);
  }
}
