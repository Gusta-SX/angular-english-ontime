import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Heart } from '../shared/hearts';

@Component({
  selector: 'app-tries',
  templateUrl: './tries.component.html',
  styleUrls: ['./tries.component.scss']
})
export class TriesComponent implements OnInit, OnChanges {

  @Input()
  public tries: number;
  public hearts: Heart[] = [
    new Heart(true), new Heart(true), new Heart(true)
  ]

  constructor() { }

  ngOnChanges(): void {
    if(this.tries !== this.hearts.length) {
      let ind = this.hearts.length - this.tries;
      this.hearts[ind -1].full = false;
    }

    console.log('tentativas recebidas de painel:', this.tries)
  }

  ngOnInit(): void {
  }

}
