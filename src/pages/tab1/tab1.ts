import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PERSONAJES } from "../../data/personajes.data";
import { Personajes } from "../../interfaces/personajes.interface";
import { Pagina2Page } from "../index.paginas";

@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  personajes:Personajes[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.personajes=PERSONAJES.slice();
  
  }

  personajeNav(personaje:any){
    this.navCtrl.push(Pagina2Page,{ 'personaje':personaje });
  }

}
