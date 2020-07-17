import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marchandise } from '../model/marchandise';
import { Observable, ObservableLike } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';

const URL = "http://localhost:8080/ProblemeWS/rest/marchandise"

@Injectable({
  providedIn: 'root'
})
export class MarchandiseService { 

  constructor(private http:HttpClient) { }

  getAllMarchandises():Observable<Marchandise[]>{ 
    return this.http.get<Marchandise[]>(URL+"/liste");
  }

  searchMarchandise(id:number):Observable<Marchandise>{
    return this.http.get<Marchandise>(URL+"/find?pId="+id);
  }

  addMarchandise(marchandiseIn:Marchandise):Observable<Marchandise> {
    return this.http.post<Marchandise>(URL+"/mc", marchandiseIn);
  }

  updateMarchandise(marchandiseIn:Marchandise):Observable<Marchandise> {
    return this.http.put<Marchandise>(URL+"/mc", marchandiseIn);
  }

  deleteMarchandise(id:number) {
    return this.http.delete(URL+"/mc/"+id, {observe: 'response'});
  }


  AssignCAerienne (marchandiseIn:Marchandise, id:number) {
    return this.http.put(URL+"/addCA/"+id, marchandiseIn);
  }

  AssignCRoutiere (marchandiseIn:Marchandise, id:number) {
    return this.http.put(URL+"/addCR/"+id, marchandiseIn);
  }

  getMarchByCAerienne(refCarg:string):Observable<Marchandise[]>{
    return this.http.get<Marchandise[]>(URL+"/ca?pRef="+refCarg);
  }

  getMarchByCRoutiere(refCarg:string):Observable<Marchandise[]>{
    return this.http.get<Marchandise[]>(URL+"/cr?pRef="+refCarg);
  }

  getMarchByKeyword(keyword:string):Observable<Marchandise[]>{
    return this.http.get<Marchandise[]>(URL+"/mc/"+keyword);
  }















}
