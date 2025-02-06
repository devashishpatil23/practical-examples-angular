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
  @Input() targetElement!: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('change') toggleShowPassword() {
    const inputField = document.getElementById(
      this.targetElement
    ) as HTMLInputElement;
    const checkedStatus = this.el.nativeElement.checked;
    if (inputField) {
      this.renderer.setAttribute(
        inputField,
        'type',
        checkedStatus ? 'text' : 'password'
      );
    }
  }
}
