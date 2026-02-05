import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parenthome } from './parenthome/parenthome';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Parenthome],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('parentChild');
}
