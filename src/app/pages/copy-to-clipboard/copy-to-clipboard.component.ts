import { Component } from '@angular/core';
import { CopyToClipboardDirective } from '../../custom-directives/copy-to-clipBoard/copy-to-clipboard.directive';

@Component({
  selector: 'app-copy-to-clipboard',
  imports: [CopyToClipboardDirective],
  templateUrl: './copy-to-clipboard.component.html',
  styleUrl: './copy-to-clipboard.component.scss',
})
export class CopyToClipboardComponent {}
