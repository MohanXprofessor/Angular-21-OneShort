import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTypes } from './data-types/data-types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataTypes],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('DataTypes');
}
