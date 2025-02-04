import { Component } from '@angular/core';
import { TooltipDirective } from '../../custom-directives/tool-tip/tooltip.directive';

@Component({
  selector: 'app-tool-tip',
  imports: [TooltipDirective],
  templateUrl: './tool-tip.component.html',
  styleUrl: './tool-tip.component.scss'
})
export class ToolTipComponent {

}
