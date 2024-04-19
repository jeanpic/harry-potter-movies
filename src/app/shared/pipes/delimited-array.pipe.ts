import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'delimitedArray',
  standalone: true
})
export class DelimitedArrayPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.join(", ");
  }

}
