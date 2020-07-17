import { Component, OnInit } from '@angular/core';
import { MarchandiseService } from '../service/marchandise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mdelete',
  templateUrl: './mdelete.component.html',
  styleUrls: ['./mdelete.component.css']
})
export class MdeleteComponent implements OnInit {

  idDel:number;
  indiceID:boolean=false;
  indiceErreur:boolean=false;

  constructor(private mService:MarchandiseService, private router:Router) { }

  ngOnInit(): void {
  }
  delete(){
    this.mService.deleteMarchandise(this.idDel).subscribe( 
      (reponse) => {if(reponse.status==202){
        console.log("dans la reponse status 202")
      this.router.navigate(['mlist']);
      this.indiceID=false;
      this.indiceErreur=false;
    }else{
      console.log("réponse pas statut 202")
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
