import { Component, OnInit } from '@angular/core';
import { CargaisonRoutiereService } from '../service/cargaisonroutiere.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crdelete',
  templateUrl: './crdelete.component.html',
  styleUrls: ['./crdelete.component.css']
})
export class CrdeleteComponent implements OnInit {

  idDel:number;
  indiceID:boolean=false;
  indiceErreur:boolean=false;

  constructor(private crService:CargaisonRoutiereService, private router:Router) { }

  ngOnInit(): void {
  }

  delete(){
    this.crService.deleteCRoutiere(this.idDel).subscribe( 
      (reponse) => {if(reponse.status==202){
        console.log("dans la reponse status 202")
      this.router.navigate(['crlis']);
      this.indiceID=false;
      this.indiceErreur=false;
    }else if (reponse.status == 418) {
      console.log("réponse teapot 418")
      this.indiceID=true;
      this.indiceErreur=false;

    }
  
  
  }, (erreur) => {
    if (erreur.status == 418){
      console.log("erreur 418")
      this.indiceID=true;
      console.log(this.indiceID)
      this.indiceErreur=false;

    } else {
    console.log("dans l'erreur")
    console.log(erreur)
    this.indiceID=false;
    this.indiceErreur=true;
    }
  })
}
 
}
