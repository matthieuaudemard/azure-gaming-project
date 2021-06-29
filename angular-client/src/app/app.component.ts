import {Component} from '@angular/core';
import {GameService} from './games/services/game.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'azure gaming project';

  constructor(private gameService: GameService, private messageService: MessageService) {
  }

  stopVm(): void {
    this.showToastVmStoping();
    this.gameService.stop().subscribe(() => {
      this.showToastVmStopped();
    });
  }

  private showToastVmStopped(): void {
    this.messageService.clear();
    this.messageService.add({
      key: 'tr',
      severity: 'success',
      summary: `Succès`,
      detail: `La VM a été arretée avec succès`,
    });
  }

  private showToastVmStoping(): void {
    this.messageService.clear();
    this.messageService.add({
      sticky: true,
      summary: `La VM est en cours d'arrêt`,
      key: 'center',
      severity: 'info'
    });
  }
}
