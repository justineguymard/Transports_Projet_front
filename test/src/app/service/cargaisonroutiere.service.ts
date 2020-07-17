import { Injectable } from '@angular/core';
import { Cargaisonroutiere } from '../model/cargaisonroutiere';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const URL = "http://localhost:8080/ProblemeWS/rest/CRoutiere"

@Injectable({
  providedIn: 'root'
})
export class CargaisonRoutiereService {

  constructor(private http:HttpClient) { } 

  getListCRoutieres() :Observable<Cargaisonroutiere[]> {
    return this.http.get<Cargaisonroutiere[]>(URL+"/liste");
  }

  addCRoutiere(croutiereIn:Cargaisonroutiere):Observable<Cargaisonroutiere>{
    return this.http.post<Cargaisonroutiere>(URL+"/cr",croutiereIn);
  }

  updateCRoutiere(croutiereIn:Cargaisonroutiere):Observable<Cargaisonroutiere>{
    return this.http.put<Cargaisonroutiere>(URL+"/cr", croutiereIn);
  }

  //Pathparam? pathvariable
  deleteCRoutiere(id:number){ 
    return this.http.delete(URL+"/cr/"+id,{observe:'response'})
  }

  //queryParam
  searchCroutiere(id:number):Observable<Cargaisonroutiere>{
    return this.http.get<Cargaisonroutiere>(URL+"/find?pId="+id);
  }

}
