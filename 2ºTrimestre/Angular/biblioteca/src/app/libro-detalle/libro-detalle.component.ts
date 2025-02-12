import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LibrosServiceService } from '../services/libros-service.service';
import { Libro } from '../model/libro.model';
@Component({
  selector: 'app-libro-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css'
})

export class LibroDetalleComponent implements OnInit{
  libro! : Libro; //la ! hace que no haga falta inicializar la variable
 any: any;
  constructor(private librosService: LibrosServiceService, private act: ActivatedRoute) {}

  ngOnInit(): void {

    this.any = this.act.snapshot.paramMap.get('id');
    this.libro = this.librosService.getLibroPorId(this.any);

    console.log(this.libro.autor)
    /*if(this.act.snapshot.paramMap.get('id') !== undefined){ //this.act.snapshot.paramMap.get('id') obtiene el valor de la URL
      this.libro = this.librosService.getLibroPorId(Number(this.act.snapshot.paramMap.get('id')));
    }*/
}
}