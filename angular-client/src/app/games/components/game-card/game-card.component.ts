import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../models/game';
import {AuthService} from '../../../auth/services/auth.service';
import {GameService} from '../../services/game.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input()
  game: Game;
  canPlay = false;

  constructor(private authService: AuthService, private gameService: GameService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.authService.loggedUser.subscribe(
      user => this.canPlay = user.gameIds?.includes(this.game._id)
    );
  }

  showConfirm(): void {
    this.messageService.clear();
    this.messageService.add({
      key: 'c',
      severity: 'info',
      sticky: true,
      summary: `La VM est en cours d'execution`,
      detail: `Voulez-vous arreter la VM ?`,
    });
  }

  playGame(): void {
    this.gameService.launch().subscribe(
      () => {
        console.log('vm started');
        this.showConfirm();
      },
      error => console.error(error)
    );
  }
}
