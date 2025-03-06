import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../../services/paises.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { Pais } from '../model/pais';//importo pais

@Component({
  selector: 'app-europa',
  standalone: true,
  imports: [AsyncPipe, FormsModule, NgFor, NgIf, RouterModule, RouterLink],
  templateUrl: './europa.component.html',
  styleUrl: './europa.component.css',
})
export class EuropaComponent implements OnInit {

  //El servicio devuelve un [] de Pais
  paises$ = new Observable<Pais[]>();
  constructor(private servicioPaises: PaisesService) {}
  ngOnInit(): void {
    this.paises$ = this.servicioPaises.getPaises();
  }
}
