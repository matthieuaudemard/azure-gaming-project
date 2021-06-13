import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './components/nav/nav.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent
  ],
  exports: [
    NavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {
}
