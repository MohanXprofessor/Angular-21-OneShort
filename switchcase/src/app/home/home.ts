import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  status = signal('offline');

  handelswitch(event: Event) {
    const target = (event.target as HTMLInputElement).value;
    this.status.set(target);
  }
}
