import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ReactiveForm');

  email=new FormControl("",[Validators.minLength(5),Validators.required,Validators.email,
    Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  ])
  password=new FormControl("",[Validators.minLength(5)])

  login(){
console.log(this.email.value,this.password.value);


  }
  reset(){
    this.email.setValue("")
    this.password.setValue("")
  }
}
