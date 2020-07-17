import { Component, OnInit } from '@angular/core';
import { Cargaisonaerienne } from '../model/cargaisonaerienne';
import { CargaisonAerienneService } from '../service/cargaisonaerienne.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-caupdate',
  templateUrl: './caupdate.component.html',
  styleUrls: ['./caupdate.component.css']
})
export class CaupdateComponent implements OnInit {

  caerienne: Cargaisonaerienne = new Cargaisonaerienne();

  constructor(private caService:CargaisonAerienneService, private router:Router, private ar:ActivatedRoute) { }

  ngOnInit(): void {

    

  }

  update(){
    console.log(this.caerienne);

    this.caService.updateCAerienne(this.caerienne).subscribe(
      (data) => {
            if (data.id != 0) {
            this.router.navigate(['calis']);
            }
      },
      (erreur) => {console.log(erreur)}
      )
    
  }

}
