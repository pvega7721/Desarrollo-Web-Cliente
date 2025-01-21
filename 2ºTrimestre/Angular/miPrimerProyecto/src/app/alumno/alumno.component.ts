import { checkIfGenericTypeBoundsCanBeEmitted } from '@angular/compiler-cli/src/ngtsc/typecheck/src/tcb_util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css',
})
export class AlumnoComponent {
  //Propiedades del alumno
  nombre: string = 'Pablo';
  apellido: string = 'Vega';
  edad: number = 19;
  dni: string = '12345678a';
  edadx5: number = this.edad * 5;
  //Mayor o menor de edad con operador ternario
  mensajeMayorEdad: string = this.edad >= 18 ? 'Mayor de edad' : 'Menor de edad';

  // Método para actualizar el DNI
  actualizarDNI(valor: string): void {
    this.dni = valor;
  }
  deshabilitado: boolean = true;
  desmarcado: boolean = false;

  //Controla que el alumno sea mayor o menor de edad
  checkMayorMenor(): boolean {
    return this.edad >=18;
  }
  //Al marcar el checkbox, muestra una alerta
  mensajeMarcado(event: Event): void{
    alert("Hola");
  }

  check: string = "antes de pulsar";

  cambiarTexto(): void{
    this.check = "checkbox pulsado";
  }

  sexoElegido(valor: string): void {
    if(valor == 'H'){
      this.check = "Pulsado hombre";
    } else{
      this.check = "Pulsado mujer";
    }
  }
}
