import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './components/nav/nav.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    NavComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {
}
