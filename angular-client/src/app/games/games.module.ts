import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {GamesRoutingModule} from "./games-routing.module";
import {GameService} from "./services/game.service";
import { GameCardComponent } from './components/game-card/game-card.component';
import {GameListComponent} from "./components/game-list/game-list.component";


@NgModule({
  declarations: [
    GameListComponent,
    GameCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GamesRoutingModule
  ],
  providers: [GameService]
})
export class GamesModule {
}
