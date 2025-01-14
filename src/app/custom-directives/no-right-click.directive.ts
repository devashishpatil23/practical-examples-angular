import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoRightClick]',
})
export class NoRightClickDirective {
  constructor() {}
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault(); // Prevent the default right-click menu
    alert('Right-click is disabled');
  }
}
