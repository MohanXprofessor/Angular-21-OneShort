import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Seffect } from './seffect/seffect';
import { Setget } from './setget/setget';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Seffect, Setget],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('SignalEffect');
}
