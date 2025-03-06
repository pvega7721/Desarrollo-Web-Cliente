import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../src/app/model/pais';
@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  constructor(private http: HttpClient) {}

  getPaises(): Observable<Pais[]> { //Devuleve un array de paises
    var apiUrl = 'https://www.restcountries.com/v3.1/region/europe';
    return this.http.get<Pais[]>(apiUrl);
  }

  andorra(): Observable<Pais[]> {
    var apiAndorra = 'https://www.restcountries.com/v3.1/name/andorra';
    return this.http.get<Pais[]>(apiAndorra);
  }
}
