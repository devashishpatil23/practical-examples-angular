import { Component } from '@angular/core';
import { HoverHighlightDirective } from '../../custom-directives/host-listner/hover-highlight.directive';
import { NoCopyNoTextSelectionDirective } from '../../custom-directives/host-listner/no-copy-no-text-selection.directive';
import { NoRightClickDirective } from '../../custom-directives/host-listner/no-right-click.directive';

@Component({
  selector: 'app-host-listner',
  imports: [HoverHighlightDirective, NoCopyNoTextSelectionDirective,NoRightClickDirective],
  templateUrl: './host-listner.component.html',
  styleUrl: './host-listner.component.scss',
})
export class HostListnerComponent {}
