import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { FormsModule } from '@angular/forms';
import { DatosLibroComponent } from './datos-libro/datos-libro.component';

@Component({
  // Define el selector del componente, usado en las plantillas HTML
  selector: 'app-hola',
  // Indica que el componente es independiente
  standalone: true,
  // Importa módulos necesarios para el componente
  imports: [
    DatosLibroComponent, //Aquí se importan los componentes
    AlumnoComponent,
    /*RouterOutlet,*/ UserProfileComponent,
    FormsModule,
  ],
  // Ruta al archivo de plantilla HTML del componente
  templateUrl: './app.component.html',
  // Ruta al archivo de estilos CSS del componente
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Clase de Angular';
  nombre: string = 'Pablo';
  edad: number = 18;

  getEdad(): number {
    return this.edad;
  }

  mayorEdad(): string {
    if (this.edad >= 18) {
      return 'Es mayor de edad';
    } else {
      return 'Es menor de edad';
    }
  }

  name: string = 'Pablo';
  imgUrl: string = './imagen.webp';

  naranja: string = 'naranja';
  marcado: boolean = true;
  deshabilitado: boolean = true;

  asignatura = {
    nombre: 'Entorno Cliente',
    codigo: 'DWEC',
  };

  nombreCompanero: string = '';

  mostrarNombre(): string {
    return (this.nombreCompanero = 'Enrique');
  }

  valor: string = '';

  mostrarTexto(event: any) {
    this.valor += event.target.value + ',';
  }
  ejemplo: string = 'HOla';

  texto1: string = '';
  texto2: string = '';

  valorHijo: string = '';
  recuperarNombre(nombre: string) {
    this.valorHijo = nombre;
  }
}
