import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventB } from './event-b/event-b';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventB, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Angular 21');

  name = 'Angular 21 OneShort Tutorial';
}
