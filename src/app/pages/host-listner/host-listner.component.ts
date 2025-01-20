import { Component } from '@angular/core';
import { HoverHighlightDirective } from '../../custom-directives/hostListner/hover-highlight.directive';
import { NoRightClickDirective } from '../../custom-directives/hostListner/no-right-click.directive';
import { NoCopyNoTextSelectionDirective } from '../../custom-directives/hostListner/no-copy-no-text-selection.directive';

@Component({
  selector: 'app-host-listner',
  imports: [
    HoverHighlightDirective,
    NoRightClickDirective,
    NoCopyNoTextSelectionDirective,
  ],
  templateUrl: './host-listner.component.html',
  styleUrl: './host-listner.component.scss',
})
export class HostListnerComponent {}
