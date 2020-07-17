import { Component, OnInit } from '@angular/core';
import { Cargaison } from '../model/cargaison';
import { CargaisonService } from '../service/cargaison.service';

@Component({
  selector: 'app-cargaisonlist',
  templateUrl: './cargaisonlist.component.html',
  styles: [
  ]
})
export class CargaisonlistComponent implements OnInit {

  
  listeCargaisons:Cargaison[];

  constructor(private cargService:CargaisonService) { }

  ngOnInit(): void {
    this.cargService.getListCargaisons().subscribe(
      (data) => {this.listeCargaisons=data},
      (erreur) => {console.log(erreur)}
    );

  }

}
