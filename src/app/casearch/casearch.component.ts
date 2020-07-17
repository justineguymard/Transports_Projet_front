import { Component, OnInit } from '@angular/core';
import { Cargaisonaerienne } from '../model/cargaisonaerienne';
import { CargaisonAerienneService } from '../service/cargaisonaerienne.service';

@Component({
  selector: 'app-casearch',
  templateUrl: './casearch.component.html',
  styleUrls: ['./casearch.component.css']
})
export class CasearchComponent implements OnInit {

  //declaration des attributs du composant
  idSearch:number;
  caerienne:Cargaisonaerienne;
  indice:boolean=false;
  indiceMsg:boolean=false;

  constructor(private caService:CargaisonAerienneService) { }

  ngOnInit(): void {
  }

  search(){
    
 
    this.caService.searchCaerienne(this.idSearch).subscribe(
      (data) => {
        if(data!=null){
        this.caerienne=data;
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
