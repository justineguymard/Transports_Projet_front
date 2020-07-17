import { Component, OnInit } from '@angular/core';
import { Marchandise } from '../model/marchandise';
import { MarchandiseService } from '../service/marchandise.service';

@Component({
  selector: 'app-msearchkw',
  templateUrl: './msearchkw.component.html',
  styleUrls: ['./msearchkw.component.css']
})
export class MsearchkwComponent implements OnInit {

  //declaration des attributs du composant
  keyword:string;
  listeMarchandisesKW:Marchandise[];
  indice:boolean=false;
  indiceMsg:boolean=false;
 
   constructor(private mService:MarchandiseService) { }
 
   ngOnInit(): void {
 
     
 
   }
 
   search(){
     
  
     this.mService.getMarchByKeyword(this.keyword).subscribe(
       (data) => {
         console.log(data)
         if(data.length != 0){
         this.listeMarchandisesKW=data;
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
