import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counter = 0;

  counterapp(action: string) {
    if (action === 'minus') {
      this.counter > 0 && this.counter--;
    } else if (action === 'plus') {
      this.counter++;
    } else if (action === 'reset') {
      this.counter = 0;
    }
  }
}
