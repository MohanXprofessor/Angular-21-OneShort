import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  str: String = '';
  handelEvent(eventName: String) {
    console.log(eventName);
    this.str = eventName;
  }
}
