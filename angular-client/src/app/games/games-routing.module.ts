import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {GameListComponent} from './components/game-list/game-list.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../auth/guard/auth.guard";

const routes: Routes = [
  {path: '', component: GameListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ]
})
export class GamesRoutingModule {
}
