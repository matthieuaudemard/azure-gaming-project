import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {GamesRoutingModule} from "./games-routing.module";
import {GameService} from "./services/game.service";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GamesRoutingModule
  ],
  exports: [
  ],
  providers: [GameService]
})
export class GamesModule {
}
