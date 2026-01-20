import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-forloop',
  imports: [],
  templateUrl: './forloop.html',
  styleUrl: './forloop.css',
})
export class Forloop {
  // Array of users
  users = signal(['ajay', 'vijay', 'sanjay', 'rahul']);
  userDetails = signal([
    { id: 1, name: 'ajay', age: 23, email: 'ajay@gmail.com' },
    { id: 2, name: 'vijay', age: 24, email: 'vijay@gmail.com' },
    { id: 3, name: 'sanjay', age: 22, email: 'sanjay@gmail.com' },
    { id: 4, name: 'rahul', age: 25, email: 'rahul@gmail.com' },
    { id: 5, name: 'deepak', age: 26, email: 'deepak@gmail.com' },
  ]);

  $count = this.userDetails().length;
}
