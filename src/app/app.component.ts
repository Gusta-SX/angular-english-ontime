import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-english-ontime';
  public gameInProgress: boolean = true
  public typeEnding: string

  endGame(type: string) {
    this.gameInProgress = false
    this.typeEnding = type
  }

  restartGame() {
    this.gameInProgress = true
    this.typeEnding = undefined
  }
}
