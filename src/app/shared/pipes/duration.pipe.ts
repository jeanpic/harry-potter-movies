import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    let hours: number = Math.floor(value / 60);
    let min: number = value % 60;
    if (hours > 0) {
      if (min != 0) {
        return hours ? `${hours}h ${value % 60}min` : `${value}min`;
      } else {
        return `${hours}h`
      }
    } else if (min > 0) {
      return `${value % 60}min`
    } else {
      return '';
    }
  }
}
