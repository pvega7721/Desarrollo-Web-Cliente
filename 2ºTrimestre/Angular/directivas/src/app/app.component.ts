import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

export interface Persona {
  nombre: string;
  apellidos: string;
  edad: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'directivas';
  nombre: string = '';
  apellido: string = '';
  mostrarMensaje: boolean = false;

  enviar() {
    this.mostrarMensaje = true;
  }

  personas: Persona[] = [
    { nombre: 'Juan', apellidos: 'Pérez', edad: 30 },
    { nombre: 'Ana', apellidos: 'García', edad: 25 },
  ];
}
