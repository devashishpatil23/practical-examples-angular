import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appShowPassword]',
})
export class ShowPasswordDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input('appShowPassword') inputRef!: HTMLInputElement;

  @HostListener('change') toggleShowPassword() {
    const checked = this.el.nativeElement.checked;
    if (this.inputRef) {
      this.renderer.setAttribute(
        this.inputRef,
        'type',
        checked ? 'text' : 'password'
      );
    }
  }
}
