import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoCopyNoTextSelection]',
})
export class NoCopyNoTextSelectionDirective {
  constructor() {}

  // Prevent copy event on the element
  @HostListener('copy', ['$event'])
  onCopy(event: ClipboardEvent) {
    event.preventDefault(); // Disable the copy action
  }

  // Disable text selection
  @HostListener('selectstart', ['$event'])
  onSelectStart(event: Event) {
    event.preventDefault(); // Disable text selection
  }
}
