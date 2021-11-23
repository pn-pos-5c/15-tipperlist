import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './components/button/button.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [ButtonComponent, NavbarComponent],
  exports: [
    NavbarComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BootstrapModule {
}
