import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comentario',
  standalone: true,
  imports: [],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css',
})
export class ComentarioComponent {
  @Input()
  opinion: string = '';
}
