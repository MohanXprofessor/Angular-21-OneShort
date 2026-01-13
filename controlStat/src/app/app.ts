import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Control } from './control/control';
import { Forloop } from './forloop/forloop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Control, Forloop],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('controlStat');
}
