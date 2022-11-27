import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CakesService {

  constructor(private _http: HttpClient) { }

  // Agrega una Cake
  newCake(data: any) {
    let url = `${environment.endPointApiCakes}`;
    return this._http.post(url, data);
  }

  // Todas las Cake
  getAllCakes() {
    let url = `${environment.endPointApiCakes}`;
    return this._http.get(url);
  }

  // Obtiene cake por usuario
  getCakeById(id: String) {
    let url = `${environment.endPointApiCakes}/${id}`;
    return this._http.get(url);
  }

  // Agrega una Rate
  newRate(id : String, data: any) {
    let url = `${environment.endPointApiRates}/${id}`;
    return this._http.post(url, data);
  }


}
