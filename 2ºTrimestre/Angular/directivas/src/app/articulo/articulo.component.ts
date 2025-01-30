import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Para poder usar ngModel
import { CommonModule, NgIf } from '@angular/common'; //Para poder usar ngIf o ngFor
import { Articulo } from '../model/articulo.model'; // Importar la interfaz Articulo
import { ListadoArticuloComponent } from '../listado-articulo/listado-articulo.component';
@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [FormsModule, CommonModule, ListadoArticuloComponent],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css',
})
export class ArticuloComponent {
  articulos: Articulo[] = [
    // Usar la interfaz Articulo para definir el tipo del array
    { nombre: 'Altavoz', precio: 10, unidades: 16 },
    { nombre: 'Pantalones', precio: 29, unidades: 22 },
    { nombre: 'Camiseta', precio: 50, unidades: 14 },
    { nombre: 'Auriculares', precio: 40, unidades: 4 },
  ];
  nombre: string = '';
  precio: number = 0;
  unidades: number = 0;
  comprar() {
    this.articulos.push({
      nombre: this.nombre,
      precio: this.precio,
      unidades: this.unidades,
    });
  }
}
