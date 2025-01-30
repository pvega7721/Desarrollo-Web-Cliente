import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-articulo',
  standalone: true,
  imports: [],
  templateUrl: './caracteristicas-articulo.component.html',
  styleUrl: './caracteristicas-articulo.component.css',
})
export class CaracteristicasArticuloComponent {
  @Output()
  selected = new EventEmitter<string>();
}
