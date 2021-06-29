import {Component} from '@angular/core';
import {GameService} from './games/services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'azure gaming project';

  constructor(private gameService: GameService) {
  }

  stopVm() {
    this.gameService.
  }
}
