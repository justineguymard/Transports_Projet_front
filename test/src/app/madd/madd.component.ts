import { Component, OnInit } from '@angular/core';
import { MarchandiseService } from '../service/marchandise.service';
import { Marchandise } from '../model/marchandise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-madd',
  templateUrl: './madd.component.html',
  styleUrls: ['./madd.component.css']
})
export class MaddComponent implements OnInit {

  //attributes
  marchandise:Marchandise = new Marchandise();

  constructor(private mService:MarchandiseService, private router:Router) { }

  ngOnInit(): void {
  }

  add(){

    this.mService.addMarchandise(this.marchandise)
      .subscribe((data) => {
        if (data.nom != null) {this.router.navigate(['mlist']),
      console.log(data)}

      },
      (erreur) => {console.log(erreur);}
      
      )
    

  }

}
