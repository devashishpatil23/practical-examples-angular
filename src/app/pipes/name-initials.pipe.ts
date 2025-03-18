import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameInitials',
})
export class NameInitialsPipe implements PipeTransform {
  transform(value: string): unknown {
    if (!value) return '';

    const words = value.trim().split(' ');
    const initials = words.map((word) => word.charAt(0).toUpperCase());
    return initials.join('');
  }
}
