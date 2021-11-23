import {Component, Input, OnInit} from '@angular/core';
import {MatchDto} from '../../../../models/matchdto';
import {SingleTippDto} from '../../../../models/singletippdto';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.scss']
})
export class MatchResultComponent implements OnInit {
  @Input() match!: MatchDto;
  @Input() singleTipp!: SingleTippDto;

  constructor() {
  }

  ngOnInit(): void {
  }

}
