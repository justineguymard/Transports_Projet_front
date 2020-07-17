import { Component, OnInit } from '@angular/core';
import { Marchandise } from '../model/marchandise';
import { MarchandiseService } from '../service/marchandise.service';

@Component({
  selector: 'app-mlistca',
  templateUrl: './mlistca.component.html',
  styleUrls: ['./mlistca.component.css']
})
export class MlistcaComponent implements OnInit {
  
   //declaration des attributs du composant
 cargRef:string;
 listeMarchandisesCA:Marchandise[];
 indice:boolean=false;
 indiceMsg:boolean=false;

  constructor(private mService:MarchandiseService) { }

  ngOnInit(): void {

    

  }

  search(){
    
 
    this.mService.getMarchByCAerienne(this.cargRef).subscribe(
      (data) => {
        console.log(data)
        if(data.length != 0){
        this.listeMarchandisesCA=data;
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