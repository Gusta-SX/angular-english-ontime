import { Component, OnDestroy, EventEmitter, OnInit, Output } from '@angular/core';
import { Phrase } from '../shared/phrases';
import { frases } from './phrase-mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, OnDestroy {
  public instruction = 'Traduza a frase para ganhar!';
  public texts: Phrase[] = frases;
  public answer: string = '';

  public round: number = 0;
  public roundPhrase: Phrase;
  public progress: number = 0;
  public tries = 3;

  @Output() public endGame: EventEmitter<string> = new EventEmitter;

  constructor() { 
    this.updateRound()
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("it's over");
  }

  updateAnswer(answer: Event) {
    this.answer = (<HTMLInputElement>answer.target).value;
    console.log(this.answer)
  }

  checkAnswer() {
    if(this.roundPhrase.phrasePt == this.answer) {
      // avança a frase
      this.round++;
      // divide a barra de progresso na quantidade de frases
      this.progress += (100/this.texts.length);
      // atualiza a frase e limpa o campo
      this.updateRound();
      // checa se todas as frases foram traduzidas
      if (this.round === 4) {
      this.endGame.emit('vitória')
      }
    } else {
      // perde um ponto
      this.tries--
      // perdeu todas as vidas
      if (this.tries === -1) {
        this.endGame.emit('derrota')
      }
    }
  }

  updateRound() {
    this.roundPhrase = this.texts[this.round]
    this.answer = ''
  }
}
