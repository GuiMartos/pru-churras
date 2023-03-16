import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  numero= 1;
  ponto1=0;
  ponto2=0;
  partida1=0;
  partida2=0;


 //Valendo
  mudarNumero(){
    this.numero=1;
  }

  mudarNumero3(){
    this.numero=3;
  }

  mudarNumero6(){
    this.numero=6;
  }

  mudarNumero9(){
    this.numero=9;
  }

  mudarNumero12(){
    this.numero=12;
  }
  //Fim do valendo

  //Pontos
  maisPonto(){
    if(this.ponto1<=12){
      this.ponto1+=this.numero;
      }
      if(this.ponto1==12){
          this.partida1+=1
          this.ponto1=0;
          this.ponto2=0;
        }

    }

  maisPonto2(){
    if(this.ponto2<=12){
    this.ponto2+=this.numero;
    }
    if(this.ponto2==12){
      this.partida2+=1
      this.ponto1=0;
      this.ponto2=0;
    }
  }

  menosPonto(){
      if(this.ponto1>=1){
        this.ponto1-=this.numero;
      }
    }

  menosPonto2(){
    if(this.ponto2>=1){
      this.ponto2-=this.numero;
    }
  }
  //Fim dos pontos

 limparVariaveis(){
  this.numero= 1;
  this.ponto1=0;
  this.ponto2=0;
  this.partida1=0;
  this.partida2=0;
 }
}





