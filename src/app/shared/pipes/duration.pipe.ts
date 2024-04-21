import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 0) {
      throw new Error("Duration must be a positive value");
    }
    let hours: number = Math.floor(value / 60);
    let min: number = value % 60;
    if (hours > 0) {
      if (min != 0) {
        return hours ? `${hours}h ${min}min` : `${min}min`;
      } else {
        return `${hours}h`
      }
    } else {
      return `${min}min`
    }
  }
}
