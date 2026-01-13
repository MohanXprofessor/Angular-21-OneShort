import { Component, isWritableSignal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-setget',
  imports: [],
  templateUrl: './setget.html',
  styleUrl: './setget.css',
})
export class Setget {
  name: WritableSignal<String> = signal('');

  default() {
    this.name.set('Angular 21');
  }

  setValue(val: string) {
    this.name.set(val);
  }
}
