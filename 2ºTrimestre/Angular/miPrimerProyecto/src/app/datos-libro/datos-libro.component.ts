import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datos-libro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './datos-libro.component.html',
  styleUrl: './datos-libro.component.css',
})
export class DatosLibroComponent {
  libro = {
    titulo: 'Componente Libro',

    autor: 'Jose Luis',

    precio: 20,

    stock: 0,

    cantidad: 5,

    imagen: '',
  };

  sumar() {
    this.libro.cantidad += 1;
  }
  restar() {
    this.libro.cantidad -= 1;
    if (this.libro.cantidad == 0) {
    }
  }
}
