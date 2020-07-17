import { Component, OnInit } from '@angular/core';
import { Cargaisonroutiere } from '../model/cargaisonroutiere';
import { CargaisonRoutiereService } from '../service/cargaisonroutiere.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cradd',
  templateUrl: './cradd.component.html',
  styleUrls: ['./cradd.component.css']
})
export class CraddComponent implements OnInit {

  croutiere:Cargaisonroutiere=new Cargaisonroutiere();

  constructor(private crService:CargaisonRoutiereService, private router:Router) { }

  ngOnInit(): void {
  }


  add(){

      this.crService.addCRoutiere(this.croutiere)
      .subscribe(
        (data) => {
          if (data.reference != null) {this.router.navigate(['crlis']),
          console.log(this.croutiere)}
        },
        (erreur) => {console.log(erreur);}
      )




  }

}
