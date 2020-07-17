import { Component, OnInit } from '@angular/core';
import { Marchandise } from '../model/marchandise';
import { MarchandiseService } from '../service/marchandise.service';

@Component({
  selector: 'app-mlistcr',
  templateUrl: './mlistcr.component.html',
  styleUrls: ['./mlistcr.component.css']
})
export class MlistcrComponent implements OnInit {

   //declaration des attributs du composant
   cargRef:string;
   listeMarchandisesCR:Marchandise[];
   indice:boolean=false;
   indiceMsg:boolean=false;
  
    constructor(private mService:MarchandiseService) { }

  ngOnInit(): void {


  }

  search(){
    
 
    this.mService.getMarchByCRoutiere(this.cargRef).subscribe(
      (data) => {
        console.log(data)
        if(data.length != 0){
        this.listeMarchandisesCR=data;
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