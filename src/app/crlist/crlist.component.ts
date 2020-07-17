import { Component, OnInit } from '@angular/core';
import { Cargaisonroutiere } from '../model/cargaisonroutiere';
import { CargaisonRoutiereService } from '../service/cargaisonroutiere.service';

@Component({
  selector: 'app-crlist',
  templateUrl: './crlist.component.html',
  styleUrls: ['./crlist.component.css']
})
export class CrlistComponent implements OnInit {

  listeCRoutieres:Cargaisonroutiere[];

  constructor(private crService:CargaisonRoutiereService) { }

  ngOnInit(): void {

      this.crService.getListCRoutieres().subscribe(
        (data) => {this.listeCRoutieres=data},
        (erreur) => {console.log(erreur)}
      )


  }

}
