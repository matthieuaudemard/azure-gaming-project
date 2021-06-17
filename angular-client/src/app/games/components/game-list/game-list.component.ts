import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {Game} from "../../models/game";
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  games: Game[];

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameService.getAll().subscribe(
      games => this.games = games
    );
  }
}
