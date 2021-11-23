import {Pipe, PipeTransform} from '@angular/core';
import {MatchDto} from '../../../models/matchdto';

@Pipe({
  name: 'goalDiff'
})
export class GoalDiffPipe implements PipeTransform {

  transform(matches: MatchDto[], minDiff: number): MatchDto[] {
    const filtered: MatchDto[] = [];
    for (const match of matches) {
      if (Math.abs(match.shot - match.received) > minDiff) {
        filtered.push(match);
      }
    }

    return filtered;
  }

}
