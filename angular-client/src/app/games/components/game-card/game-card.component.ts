import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../models/game';
import {AuthService} from '../../../auth/services/auth.service';
import {GameService} from '../../services/game.service';
import {MessageService} from 'primeng/api';
import {environment} from '../../../../environments/environment';

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

  showToastStopVm(): void {
    this.messageService.clear();
    this.messageService.add({
      key: 'c',
      severity: 'warn',
      sticky: true,
      summary: `La VM est en cours d'execution`,
      detail: `Voulez-vous arrêter la VM ?`,
    });
  }

  playGame(): void {
    this.showToastVmStarting();
    this.gameService.launch().subscribe(
      () => {
        this.showToastStopVm();
        window.open(environment.gameUri);
      },
      error => console.error(error)
    );
  }

  private showToastVmStarting(): void {
    this.messageService.clear();
    this.messageService.add({
      sticky: true,
      summary: 'La VM est en cours de démarrage',
      key: 'center',
      severity: 'info'
    });
  }
}
