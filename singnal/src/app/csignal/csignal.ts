import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-csignal',
  imports: [],
  templateUrl: './csignal.html',
  styleUrl: './csignal.css',
})
export class CSignal {
  height = signal(10);

  width = signal(10);

  area = computed(() => this.height() * this.width());

  constructor() {
    effect(() => {
      console.log(`Height: ${this.height()} Width: ${this.width()} Area: ${this.area()}`);
    });
  }

  increaseheight() {
    this.height.set(this.height() + 5);
  }

  increasewidth() {
    this.width.set(this.width() + 5);
  }

  reset() {
    this.height.set(10);
    this.width.set(10);
  }
}
