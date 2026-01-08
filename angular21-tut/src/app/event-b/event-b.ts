import { Component } from '@angular/core';

@Component({
  selector: 'app-event-b',
  imports: [],
  templateUrl: './event-b.html',
  styleUrl: './event-b.css',
})
export class EventB {
  onClickMe() {
    alert('Button Clicked!');
  }
}
