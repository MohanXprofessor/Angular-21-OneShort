import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
})
export class Control {
  color = '';
  status = signal('In Progress');

  handlestatus(event: Event) {
    const target = event.target as HTMLInputElement;
    this.status.set(target.value);
  }
}
