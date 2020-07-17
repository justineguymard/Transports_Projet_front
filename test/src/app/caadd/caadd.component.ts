import { Component, OnInit } from '@angular/core';
import { Cargaisonaerienne } from '../model/cargaisonaerienne';
import { CargaisonAerienneService } from '../service/cargaisonaerienne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caadd',
  templateUrl: './caadd.component.html',
  styleUrls: ['./caadd.component.css']
})
export class CaaddComponent implements OnInit {

  caerienne: Cargaisonaerienne = new Cargaisonaerienne();

  constructor(private caService: CargaisonAerienneService, private router: Router) { }

  ngOnInit(): void {
  }

  add() {

    this.caService.addCAerienne(this.caerienne)
      .subscribe(
        (data) => {
          
          if (data.reference != null) { this.router.navigate(['calis']),
           console.log(this.caerienne) }
        },
        (erreur) => { console.log(erreur); }
      )


  }

}
