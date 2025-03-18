import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purePipe',
})
export class PurePipePipe implements PipeTransform {
  transform(products: string[]): number {
    return products.length;
  }
}
