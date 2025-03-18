import { Component } from '@angular/core';
import { TruncateWordsPipe } from '../../pipes/truncate-words.pipe';
import { NameInitialsPipe } from '../../pipes/name-initials.pipe';

@Component({
  selector: 'app-custom-pipes',
  imports: [TruncateWordsPipe, NameInitialsPipe],
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.scss',
})
export class CustomPipesComponent {}
