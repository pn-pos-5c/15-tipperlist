import {Pipe, PipeTransform} from '@angular/core';
import {SingleTippDto} from '../../../models/singletippdto';
import {MatchDto} from '../../../models/matchdto';

@Pipe({
  name: 'result'
})
export class ResultPipe implements PipeTransform {

  transform(value: SingleTippDto | MatchDto): string {
    return `${value?.shot ?? ''}:${value?.received ?? ''}`;
  }

}
