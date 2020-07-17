import { Component, OnInit } from '@angular/core';
import { Cargaisonroutiere } from '../model/cargaisonroutiere';
import { CargaisonRoutiereService } from '../service/cargaisonroutiere.service';

@Component({
  selector: 'app-crsearch',
  templateUrl: './crsearch.component.html',
  styleUrls: ['./crsearch.component.css']
})
export class CrsearchComponent implements OnInit {

  //attributes
  idSearch:number;
  croutiere:Cargaisonroutiere;
  indice:boolean=false;
  indiceMsg:boolean=false;

  constructor(private crService:CargaisonRoutiereService) { }

  ngOnInit(): void {
  }

  search(){
    
 
    this.crService.searchCroutiere(this.idSearch).subscribe(
      (data) => {
        if(data!=null){
        this.croutiere=data;
        this.indice=true;
        this.indiceMsg=false;
        }else{
        
        this.indice=false;
        this.indiceMsg=true;

        }
      },
      (erreur) => {
        console.log(erreur);
        this.indice=false;
        this.indiceMsg=true;
      }
    );

}

}
