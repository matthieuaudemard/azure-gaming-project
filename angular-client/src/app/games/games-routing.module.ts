import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {GameListComponent} from './components/game-list/game-list.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: GameListComponent}
];

@NgModule({
  declarations: [
    GameListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ]
})
export class GamesRoutingModule {
}
