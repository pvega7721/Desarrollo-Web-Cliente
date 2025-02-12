import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { LibrosServiceService } from '../services/libros-service.service';
import { NgModel } from '@angular/forms';
import { Libro } from '../model/libro.model'; //para mostrar la lista de libros es necesario importar el objeto desde el modelo
import { RouterLink } from '@angular/router';//para que funcione el enlace a librodetalle

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css',
})
export class LibrosComponent implements OnInit {
  libros: Libro[] = [];

  constructor(private librosService: LibrosServiceService) {} //Los servicios se importan en el constructor, no en imports

  ngOnInit(): void {
    this.libros= this.librosService.getLibros();
      //this.libros = this.librosService.getLibroPorId();
  }
}
