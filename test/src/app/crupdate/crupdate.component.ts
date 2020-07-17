import { Component, OnInit } from '@angular/core';
import { Cargaisonroutiere } from '../model/cargaisonroutiere';
import { CargaisonRoutiereService } from '../service/cargaisonroutiere.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crupdate',
  templateUrl: './crupdate.component.html',
  styleUrls: ['./crupdate.component.css']
})
export class CrupdateComponent implements OnInit {

  //attributes
  croutiere:Cargaisonroutiere = new Cargaisonroutiere();

  constructor(private crService:CargaisonRoutiereService, private router:Router) { }

  ngOnInit(): void {
  }

  
  update(){
    console.log(this.croutiere);

    this.crService.updateCRoutiere(this.croutiere).subscribe(
      (data) => {
            if (data.id != 0) {
            this.router.navigate(['calis']);
            }
      },
      (erreur) => {console.log(erreur)}
      )
    
  }

}
