import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCopyToClipboard]',
})
export class CopyToClipboardDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() copiedText: string = '';

  @HostListener('click') onClick() {
    if (this.copiedText) {
      navigator.clipboard.writeText(this.copiedText).then(() => {
        this.showToolTip('Copied');
      });
    }
  }

  private showToolTip(text: string) {
    const toolTip = this.renderer.createElement('span');
    this.renderer.addClass(toolTip, 'copy-tooltip');
    toolTip.innerText = text;
    this.renderer.appendChild(this.el.nativeElement, toolTip);

    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, toolTip);
    }, 1500);
  }
}
