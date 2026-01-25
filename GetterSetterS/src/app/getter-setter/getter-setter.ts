import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getter-setter',
  imports: [FormsModule],
  templateUrl: './getter-setter.html',
  styleUrl: './getter-setter.css',
})
export class GetterSetter {
  user = signal('Arjun Singh');

  // Getter And Setter

  get Name(): string {
    return this.user();
  }
  set Name(value: string) {
    this.user.set(value);
  }

  // Object Property
  student = signal({
    firstName: 'John',
    lastName: 'Cena',
    email: 'johncena@test.com',
  });

  // Object Getter and Setter
  get studentName(): string {
    return this.student().firstName;
  }
  set studentName(value: string) {
    this.student.update((item) => ({ ...item, firstName: value }));
  }

  get studentlastName(): string {
    return this.student().lastName;
  }
  set studentlastName(value: string) {
    this.student.update((item) => ({ ...item, lastName: value }));
  }
  get studentEmail(): string {
    return this.student().email;
  }
  set studentEmail(value: string) {
    this.student.update((item) => ({ ...item, email: value }));
  }
}
