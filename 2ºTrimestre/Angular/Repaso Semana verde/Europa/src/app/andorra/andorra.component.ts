import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../../services/paises.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { ComentarioComponent } from '../comentario/comentario.component';
import { Pais } from '../model/pais'; //importamos el modelo de Pais
@Component({
  selector: 'app-andorra',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    NgFor,
    NgIf,
    RouterModule,
    RouterLink,
    ComentarioComponent,
  ],
  templateUrl: './andorra.component.html',
  styleUrl: './andorra.component.css',
})
export class AndorraComponent implements OnInit {
  //El servicio devuelve un [] de Pais
  andorra$ = new Observable<Pais[]>();
  constructor(private servicioPaises: PaisesService) {}
  opinion: string = ''; //Inicializo el comentario vacío
  //Variable iniciada a true que representa si el botón está habilitado
  emptyOpinion: boolean = true;
  ngOnInit(): void {
    this.andorra$ = this.servicioPaises.andorra();
  }

  registrarOpinion() {
    this.emptyOpinion = false;
  }
}
