import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'formatNumber',
  standalone: true,
})
export class FormatNumberPipe implements PipeTransform {
  transform(value: number | string, ...args: unknown[]): unknown {
    if (!value) return 0;

    const num = Number(value);

    if (isNaN(num)) return 'Invalid';

    if (num < 100000) {
      return new CurrencyPipe('en-us', 'INR').transform(num);
    } else if (num < 10000000) {
      return (
        new CurrencyPipe('en-us', 'INR').transform((num / 100000).toFixed()) +
        'L'
      );
    } else {
      return (
        new CurrencyPipe('en-us', 'INR').transform((num / 10000000).toFixed()) +
        'L'
      );
    }
  }
}
