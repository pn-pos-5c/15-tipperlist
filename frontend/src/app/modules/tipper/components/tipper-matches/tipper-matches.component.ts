import {Component, Input, OnInit} from '@angular/core';
import {SingleTippDto} from '../../../../models/singletippdto';
import {TippsService} from '../../../core/services/tipps.service';
import {MatchDto} from '../../../../models/matchdto';

@Component({
  selector: 'app-tipper-matches',
  templateUrl: './tipper-matches.component.html',
  styleUrls: ['./tipper-matches.component.scss']
})
export class TipperMatchesComponent implements OnInit {
  @Input() singleTipps: SingleTippDto[] = [];
  @Input() tipperName = '';
  minGoalDiff = 0;
  matches: MatchDto[] = [];

  constructor(private tippsService: TippsService) {
  }

  ngOnInit(): void {
    this.tippsService.getMatchResults().subscribe(resolve => {
      this.matches = resolve;
    });
  }

  getTipForMatch(match: MatchDto): SingleTippDto {
    return this.singleTipps.filter(tipp => tipp.seq === match.seq)[0];
  }

}
