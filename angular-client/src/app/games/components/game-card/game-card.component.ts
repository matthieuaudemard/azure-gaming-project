import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../models/game';
import {AuthService} from '../../../auth/services/auth.service';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input()
  game: Game;
  canPlay = false;

  constructor(private authService: AuthService, private gameService: GameService) {
  }

  ngOnInit(): void {
    this.authService.loggedUser.subscribe(
      user => this.canPlay = user.gameIds?.includes(this.game._id)
    );
  }

  playGame(): void {
    this.gameService.launch().subscribe(
      () => {
        console.log('vm started');
        setTimeout(() => this.gameService.stop().subscribe(
          () => console.log('vm stopped'),
          error => console.log(error)
        ), 1000);
      },
      error => console.error(error)
    );
  }
}
