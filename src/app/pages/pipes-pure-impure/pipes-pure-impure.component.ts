import { Component } from '@angular/core';
import { PurePipePipe } from '../../pipes/pure-pipe.pipe';
import { ImpurePipePipe } from '../../pipes/impure-pipe.pipe';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pipes-pure-impure',
  imports: [PurePipePipe, ImpurePipePipe],
  templateUrl: './pipes-pure-impure.component.html',
  styleUrl: './pipes-pure-impure.component.scss',
})
export class PipesPureImpureComponent {
  products: string[] = ['mango', 'apple', 'orange'];
  user: any = {
    name: 'Tom',
    age: 25,
  };
  onAdd() {
    this.products = [...this.products, 'bannana'];
  }

  updateAge() {
    this.user.age += 1;
  }
}
