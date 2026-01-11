import { Component, effect, signal } from '@angular/core';
import { CSignal } from '../csignal/csignal';

@Component({
  selector: 'app-signals',
  imports: [CSignal],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  data = 1;

  constructor() {
    effect(() => {
      console.log('Data changed:' + this.count());
      if (this.count() === 5) {
        this.count.set(0);
      }
    });
  }

  updateData() {
    this.data += 1;

    console.log(this.data);
  }
  // using signal
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1);
  }
}
