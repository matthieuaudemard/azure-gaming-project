import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../models/game';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input()
  game: Game;
  canPlay = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.loggedUser.subscribe(
      user => this.canPlay = user.gameIds.includes(this.game._id)
    );
  }

}
