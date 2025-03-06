import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  titulo: string = 'Bienvenido a la página de Europa';
  rutaImagen: string = 'paisesB.jpg';
}
