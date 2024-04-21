import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'spacedArray',
  standalone: true
})
export class SpacedArrayPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.join(", ");
  }

}
