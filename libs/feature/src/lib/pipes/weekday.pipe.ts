import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'weekday' })
export class WeekdayPipe implements PipeTransform {
  #weekdays = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];

  transform(day: number) {
    return this.#weekdays[day];
  }
}
