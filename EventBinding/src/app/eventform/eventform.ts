import { Component } from '@angular/core';

@Component({
  selector: 'app-eventform',
  imports: [],
  templateUrl: './eventform.html',
  styleUrl: './eventform.css',
})
export class Eventform {
  password = '';
  confirmPassword = '';

  isStrong = false;
  isMatch = false;

  passwordTouched = false;
  confirmTouched = false;

  checkPassword(event: KeyboardEvent) {
    this.password = (event.target as HTMLInputElement).value;
    this.passwordTouched = true;

    if (this.password.length >= 8) {
      this.isStrong = true;
    } else {
      this.isStrong = false;
    }
  }

  checkConfirmPassword(event: KeyboardEvent) {
    this.confirmPassword = (event.target as HTMLInputElement).value;
    this.confirmTouched = true;

    if (this.password === this.confirmPassword && this.confirmPassword.length > 0) {
      this.isMatch = true;
    } else {
      this.isMatch = false;
    }
  }
}
