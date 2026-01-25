import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name = signal('Angular Developer');

  reset() {
    this.name.set('Angular Developer');
  }
  age = 20;

  userData = signal({
    name: 'John Doe',
    age: 30,
    email: 'Johndoe@test.com',
  });

  userDatachange(key: string, value: string) {
    this.userData.update((item) => ({ ...item, [key]: value }));
  }
}
