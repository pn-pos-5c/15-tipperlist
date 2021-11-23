import {Component, OnInit} from '@angular/core';
import {MatchDto} from '../../../../models/matchdto';
import {TippsService} from '../../../core/services/tipps.service';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  matches!: MatchDto[];

  constructor(private tippsService: TippsService, private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.tippsService.getMatchResults().subscribe(resolve => this.matches = resolve);
  }

  updateResults(match: MatchDto): void {
    this.adminService.updateMatchResult(match).subscribe(resolve => console.log(resolve));
  }
}
