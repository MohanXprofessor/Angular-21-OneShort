import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-seffect',
  imports: [],
  templateUrl: './seffect.html',
  styleUrl: './seffect.css',
})
export class Seffect {
  speed = signal(0);
  color = 'black';
  fruit = signal('Apple');
  constructor() {
    effect(() => {
      if (this.speed() > 0 && this.speed() <= 60) {
        this.color = 'green';
      }
      if (this.speed() > 60 && this.speed() <= 120) {
        this.color = 'orange';
      }
      if (this.speed() > 120) {
        this.color = 'red';
      }
      console.log('Speed changed to:', this.speed());
    });

    effect(() => {
      console.log('Change Fruit:', this.fruit());
    });
  }
  increaseSpeed() {
    this.speed.update((s) => s + 10);
  }

  changeFruit() {
    this.fruit.set('Banana');
  }
}
