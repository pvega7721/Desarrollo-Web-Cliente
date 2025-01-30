import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Para poder usar ngModel
import { CommonModule, NgIf } from '@angular/common'; //Para poder usar ngIf o ngFor
@Component({
  selector: 'app-listado-articulo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listado-articulo.component.html',
  styleUrl: './listado-articulo.component.css',
})
export class ListadoArticuloComponent {
  @Input()
  articulos: any;
}
