import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: HomeComponentComponent },
];
