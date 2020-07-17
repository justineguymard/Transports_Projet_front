import { Component, OnInit } from '@angular/core';
import { Marchandise } from '../model/marchandise';
import { MarchandiseService } from '../service/marchandise.service';
import { Router } from '@angular/router';
import { Cargaisonaerienne } from '../model/cargaisonaerienne';

@Component({
  selector: 'app-mcaassign',
  templateUrl: './mcaassign.component.html',
  styleUrls: ['./mcaassign.component.css']
})
export class McaassignComponent implements OnInit {

  idCA: number;
  marchandise: Marchandise = new Marchandise();


  constructor(private mService: MarchandiseService, private router: Router) { }

  ngOnInit(): void {
  }

  assign() {
    this.mService.AssignCAerienne(this.marchandise, this.idCA).subscribe(
      (data) => {
        console.log(data)
        this.router.navigate(['mlist'])


      }, (erreur) => {

        console.log(erreur)


      })
  }


}
