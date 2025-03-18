import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe',
  pure: false,
})
export class ImpurePipePipe implements PipeTransform {
  transform(user: any): unknown {
    return `Name is ${user.name} and updated age is ${user.age}`;
  }
}
