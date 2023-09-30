import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true,
})
export class PhonePipe implements PipeTransform {
  transform(value: string, ...args: string[]): unknown {
    const [country] = args;

    if (!value) return value;

    if (country === 'us') {
      return `(${value.substring(0, 3)}) ${value.substring(
        3,
        6
      )}-${value.substring(6)}`;
    }

    return value;
  }
}
