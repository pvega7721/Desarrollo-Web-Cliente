import { Injectable } from '@angular/core';
import { Libro } from '../model/libro.model';

@Injectable({
  providedIn: 'root',
})
export class LibrosServiceService {
  constructor() {

  }

  private Libros: Libro[] = [
    {
      id: 0,
      titulo: 'Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
    },
    {
      id: 1,
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
    },
    {
      id: 2,
      titulo: '1984',
      autor: 'George Orwell',
    },
    {
      id: 3,
      titulo: 'El Principito',
      autor: 'Antoine de Saint-Exupéry',
    },
  ] ;

  getLibros(){
    return this.Libros;
  }

  getLibroPorId( id: number): any{
    
    console.log("num: " + id);


    return this.Libros[id];

  }
}
