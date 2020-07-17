import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';
import { Cargaison } from '../model/cargaison';

const URL = "http://localhost:8080/ProblemeWS/rest/carg"

@Injectable({
  providedIn: 'root'
})
export class CargaisonService {

  constructor(private http:HttpClient) { }

  getListCargaisons():Observable<Cargaison[]> {
    return this.http.get<Cargaison[]>(URL+"/liste");
  }

}
