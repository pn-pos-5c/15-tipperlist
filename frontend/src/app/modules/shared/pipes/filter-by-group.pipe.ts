import {Pipe, PipeTransform} from '@angular/core';
import {TipperDto} from '../../../models/tipperdto';

@Pipe({
  name: 'filterByGroup',
  pure: false
})
export class FilterByGroupPipe implements PipeTransform {

  transform(tippers: TipperDto[], groupName: string): TipperDto[] {
    let filtered: TipperDto[] = [];

    if (groupName === 'Alle') {
      filtered = tippers;
      return filtered;
    }

    for (const tipper of tippers) {
      if (tipper.groups.includes(groupName)) {
        filtered.push(tipper);
      }
    }

    return filtered;
  }

}
