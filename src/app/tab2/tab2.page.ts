import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  numero= 1;

  mudarNumero(){
    this.numero=1
  }

  mudarNumero3(){
    this.numero=3
  }

  mudarNumero6(){
    this.numero=6
  }

  mudarNumero9(){
    this.numero=9
  }

  mudarNumero12(){
    this.numero=12
  }
}
