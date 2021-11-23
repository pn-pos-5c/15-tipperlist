import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipperOverviewComponent } from './components/tipper-overview/tipper-overview.component';
import { TipperNamesComponent } from './components/tipper-names/tipper-names.component';
import { TipperMatchesComponent } from './components/tipper-matches/tipper-matches.component';
import {SharedModule} from '../shared/shared.module';
import {BootstrapModule} from '../bootstrap/bootstrap.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [TipperOverviewComponent, TipperNamesComponent, TipperMatchesComponent],
  imports: [
    CommonModule,
    SharedModule,
    BootstrapModule,
    FormsModule
  ]
})
export class TipperModule { }
