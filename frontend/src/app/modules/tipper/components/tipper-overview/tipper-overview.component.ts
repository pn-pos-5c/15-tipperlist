import {Component, OnInit} from '@angular/core';
import {TippsService} from '../../../core/services/tipps.service';
import {TipperDto} from '../../../../models/tipperdto';
import {SingleTippDto} from '../../../../models/singletippdto';

@Component({
  selector: 'app-tipper-overview',
  templateUrl: './tipper-overview.component.html',
  styleUrls: ['./tipper-overview.component.scss']
})
export class TipperOverviewComponent implements OnInit {
  groups: string[] = ['Alle'];
  tippers: TipperDto[] = [];
  selectedGroup = this.groups[0];
  tipperName = '';
  singleTipps: SingleTippDto[] = [];

  constructor(private tipsService: TippsService) {
  }

  ngOnInit(): void {
    this.tipsService.getTipperNames().subscribe(tippers => {
      this.tippers = tippers;

      for (const tipper of tippers) {
        for (const group of tipper.groups.split(',')) {
          if (group.length > 0 && !this.groups.includes(group)) {
            this.groups.push(group);
          }
        }
      }
    });
  }

  groupSelected(group: string): void {
    this.selectedGroup = group;
  }

  tipperSelected(tipperId: number): void {
    this.tipsService.getTip(tipperId).subscribe(resolve => {
      this.tipperName = resolve.tipperName;
      this.singleTipps = resolve.tipps;
    });
  }
}
