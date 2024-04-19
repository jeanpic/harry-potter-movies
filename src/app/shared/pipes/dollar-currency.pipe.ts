import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollarCurrency',
  standalone: true
})
export class DollarCurrencyPipe implements PipeTransform {

  transform(value: string): string {
    return `$${value} million`;
  }

}
