import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyEvent } from './key-event/key-event';
import { Eventform } from './eventform/eventform';
import { Event } from './event/event';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KeyEvent, Eventform, Event],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('EventBinding');
}
