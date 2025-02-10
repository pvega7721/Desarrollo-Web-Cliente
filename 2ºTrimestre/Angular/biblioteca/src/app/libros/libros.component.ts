import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { LibrosServiceService } from '../services/libros-service.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css',
})
export class LibrosComponent {}
