import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EuropaComponent } from './europa/europa.component';
import { AndorraComponent } from './andorra/andorra.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'europa', component: EuropaComponent },
  { path: 'andorra', component: AndorraComponent },
  { path: '**', component: HomeComponent },
];
