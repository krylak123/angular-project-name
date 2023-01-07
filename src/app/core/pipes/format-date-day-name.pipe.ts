import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'formatDateDayName',
  standalone: true,
})
export class FormatDateDayNamePipe implements PipeTransform {
  transform(value: Date): string {
    return `${format(value, 'EEEE')}`;
  }
}
