import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';

export const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'libro-detalle/:id', component: LibroDetalleComponent },
  { path: '**', component: HomeComponentComponent },
];
