import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetListComponent } from './planet-list/planet-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlanetDetailComponent, PlanetListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'planetas1';
}
