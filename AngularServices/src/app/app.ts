import { Component, signal } from '@angular/core';
import { UserService } from './services/user-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AngularServices');
  constructor(public userservice: UserService) {}

  userDetail: any = '';

  getUser() {
    const data = this.userservice.getUser();
    console.log(data);
    this.userDetail = data;
  }
}
