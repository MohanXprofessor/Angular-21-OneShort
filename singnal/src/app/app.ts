import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signals } from './signals/signals';
import { CSignal } from './csignal/csignal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Signals, CSignal],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('singnal');
}
