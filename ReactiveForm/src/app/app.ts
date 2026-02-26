import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ReactiveForm');
  email=new FormControl("")
  password=new FormControl("")

  login(){
console.log(this.email.value,this.password.value);


  }
  reset(){
    this.email.setValue("")
    this.password.setValue("")
  }
}
