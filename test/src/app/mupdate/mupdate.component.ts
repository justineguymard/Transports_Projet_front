import { Component, OnInit } from '@angular/core';
import { Marchandise } from '../model/marchandise';
import { MarchandiseService } from '../service/marchandise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mupdate',
  templateUrl: './mupdate.component.html',
  styleUrls: ['./mupdate.component.css']
})
export class MupdateComponent implements OnInit {

  marchandise:Marchandise = new Marchandise();

  constructor(private mService:MarchandiseService, private router:Router) { }

  ngOnInit(): void {
  }


  update(){

    this.mService.updateMarchandise(this.marchandise).subscribe(
      (data) => {
            if (data.id != 0) {
            this.router.navigate(['mlist']);
            }
      },
      (erreur) => {console.log(erreur)}
      )




  }

}
