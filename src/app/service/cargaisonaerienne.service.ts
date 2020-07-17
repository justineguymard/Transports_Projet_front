import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cargaisonaerienne } from '../model/cargaisonaerienne';

const URL = "http://localhost:8080/ProblemeWS/rest/CAerienne"

@Injectable({
  providedIn: 'root'
})
export class CargaisonAerienneService {

  constructor(private http:HttpClient) { }

  getListCAeriennes() :Observable<Cargaisonaerienne[]> {
    return this.http.get<Cargaisonaerienne[]>(URL+"/liste");
  }

  addCAerienne(caerienneIn:Cargaisonaerienne):Observable<Cargaisonaerienne>{
    return this.http.post<Cargaisonaerienne>(URL+"/ca",caerienneIn);
  }

  updateCAerienne(caerienneIn:Cargaisonaerienne):Observable<Cargaisonaerienne>{
    return this.http.put<Cargaisonaerienne>(URL+"/ca", caerienneIn);
  }

  //Pathparam? pathvariable
  deleteCAerienne(id:number){
    return this.http.delete(URL+"/ca/"+id,{observe:'response'})
  }

  //queryParam
  searchCaerienne(id:number):Observable<Cargaisonaerienne>{
    return this.http.get<Cargaisonaerienne>(URL+"/find?pId="+id);
  }

}
