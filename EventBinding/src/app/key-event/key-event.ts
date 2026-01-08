import { Component } from '@angular/core';

@Component({
  selector: 'app-key-event',
  imports: [],
  templateUrl: './key-event.html',
  styleUrl: './key-event.css',
})
export class KeyEvent {
  field(): void {
    console.log('field is updating');
  }

  updateField(event: KeyboardEvent): void {
    console.log(`The user pressed: ${event.key}`);
  }

  // example

  value: string = '';
  onSearch(event: KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
    this.value = value;
  }
  id: string = '';
  onPass(event: KeyboardEvent) {
    const password = (event.target as HTMLInputElement).value;
    if (password.length >= 8) {
      console.log('Password is strong');
      this.id = 'green';
    } else {
      console.log('Password is Weak');
      this.id = 'red';
    }
  }
}
