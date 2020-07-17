import { Component, OnInit } from '@angular/core';
import { Marchandise } from '../model/marchandise';
import { MarchandiseService } from '../service/marchandise.service';

@Component({
  selector: 'app-mlist',
  templateUrl: './mlist.component.html',
  styleUrls: ['./mlist.component.css']
})
export class MlistComponent implements OnInit {

  listeMarchandises:Marchandise[];

  constructor(private mService:MarchandiseService) { }

  ngOnInit(): void {

    this.mService.getAllMarchandises().subscribe(
      (data) => {this.listeMarchandises=data},
      (erreur) => {console.log(erreur)}
    );

  }



}
