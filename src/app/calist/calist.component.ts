import { Component, OnInit } from '@angular/core';
import { Cargaisonaerienne } from '../model/cargaisonaerienne';
import { CargaisonAerienneService } from '../service/cargaisonaerienne.service';

@Component({
  selector: 'app-calist',
  templateUrl: './calist.component.html',
  styleUrls: ['./calist.component.css']
})
export class CalistComponent implements OnInit {

  listeCAeriennes:Cargaisonaerienne[];

  
  
  constructor(private caService:CargaisonAerienneService) { }

  ngOnInit(): void {

    

    this.caService.getListCAeriennes().subscribe(
      (data) => {this.listeCAeriennes=data},
      (erreur) => {console.log(erreur)}
    );

  }

}
