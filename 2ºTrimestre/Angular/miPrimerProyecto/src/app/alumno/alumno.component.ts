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
  nombre: string = 'Pablo';
  apellido: string = 'Vega';
  edad: number = 19;
  dni: string = '12345678a';
  edadx5: number = this.edad * 5;

  mayorEdad(): string {
    if (this.edad >= 18) {
      return 'Es mayor de edad';
    } else {
      return 'Es menor de edad';
    }
  }

  desmarcado: boolean = false;
}
