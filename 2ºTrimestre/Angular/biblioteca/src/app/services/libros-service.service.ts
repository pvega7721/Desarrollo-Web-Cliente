import { Injectable } from '@angular/core';
import { Libro } from '../model/libro.model';

@Injectable({
  providedIn: 'root',
})
export class LibrosServiceService {
  constructor() {}

  libros = [
    {
      id: 1,
      titulo: 'Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
    },
    {
      id: 2,
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
    },
    {
      id: 3,
      titulo: '1984',
      autor: 'George Orwell',
    },
    {
      id: 4,
      titulo: 'El Principito',
      autor: 'Antoine de Saint-Exupéry',
    },
  ];

  getLibros(): Libro[] {
    return this.libros;
  }
}
