import { Component, OnInit } from '@angular/core';
import { Marchandise } from '../model/marchandise';
import { MarchandiseService } from '../service/marchandise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mcrassign',
  templateUrl: './mcrassign.component.html',
  styleUrls: ['./mcrassign.component.css']
})
export class McrassignComponent implements OnInit {


  idCR: number;
  marchandise: Marchandise = new Marchandise();


  constructor(private mService: MarchandiseService, private router: Router) { }

  ngOnInit(): void {
  }

  assign() {
    this.mService.AssignCRoutiere(this.marchandise, this.idCR).subscribe(
      (data) => {
        console.log(data)
        this.router.navigate(['mlist'])


      }, (erreur) => {

        console.log(erreur)


      })
  }
}
