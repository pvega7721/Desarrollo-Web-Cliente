import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  @Input()
  name: string = 'Pablo';
  @Input()
  role: string = 'CEO';

  @Output()
  selected = new EventEmitter<string>();

  seleccionar() {
    this.selected.emit(this.name);
  }
}
