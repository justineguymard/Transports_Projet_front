import { Component, OnInit } from '@angular/core';
import { Marchandise } from '../model/marchandise';
import { MarchandiseService } from '../service/marchandise.service';

@Component({
  selector: 'app-msearch',
  templateUrl: './msearch.component.html',
  styleUrls: ['./msearch.component.css']
})
export class MsearchComponent implements OnInit {

 //declaration des attributs du composant
 idSearch:number;
 mOut:Marchandise;
 indice:boolean=false;
 indiceMsg:boolean=false;

  constructor(private mService:MarchandiseService) { }

  ngOnInit(): void {
  }

  search(){
    
 
    this.mService.searchMarchandise(this.idSearch).subscribe(
      (data) => {
        if(data!=null){
        this.mOut=data;
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
