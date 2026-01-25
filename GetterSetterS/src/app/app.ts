import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetterSetter } from './getter-setter/getter-setter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GetterSetter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('GetterSetterS');
}
