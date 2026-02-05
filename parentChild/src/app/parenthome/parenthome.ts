import { Component, signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parenthome',
  imports: [Child],
  templateUrl: './parenthome.html',
  styleUrl: './parenthome.css',
})
export class Parenthome {
  users = signal('Parent User');

  newUser = signal('');

  addnewUser() {
    // Add the new user to the existing users
    this.users.update((data) => data + ', ' + this.newUser());
    this.newUser.set('');
  }

  studentData = signal([
    { name: 'John', age: 15 },
    { name: 'Emma', age: 14 },
    { name: 'Michael', age: 16 },
  ]);
}
