import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; //Para poder usar ngModel
import { CommonModule, NgIf } from '@angular/common'; //Para poder usar ngIf o ngFor
import { ArticuloComponent } from './articulo/articulo.component';

export interface Persona {
  //Las interfaces se crean fuera del componente
  nombre: string;
  apellidos: string;
  edad: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ArticuloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'directivas';
  nombre: string = '';
  apellido: string = '';
  mostrarMensaje: boolean = false;
  ocultarMensaje: boolean = true;
  enviar() {
    this.ocultarMensaje = false;
    this.mostrarMensaje = true;
  }

  personas: Persona[] = [
    //Array de objetos de tipo Persona
    { nombre: 'Juan', apellidos: 'Pérez', edad: 30 },
    { nombre: 'Ana', apellidos: 'García', edad: 25 },
    { nombre: 'Luis', apellidos: 'Martínez', edad: 35 },
    { nombre: 'María', apellidos: 'López', edad: 28 },
    { nombre: 'Carlos', apellidos: 'Rodríguez', edad: 40 },
  ];

  boton1: boolean = false;
  boton2: boolean = false;
  boton3: boolean = false;
  mostrarBoton1() {
    this.boton1 = true;
  }
  mostrarBoton2() {
    this.boton2 = true;
  }
  mostrarBoton3() {
    this.boton3 = true;
  }
}
