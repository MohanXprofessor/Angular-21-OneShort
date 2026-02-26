import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ReactiveGroup');

  loginForm=new FormGroup({
    name:new FormControl("",[Validators.minLength(3),
      Validators.maxLength(15),
      Validators.required
    ]),
    email:new FormControl("",[Validators.minLength(3),

      Validators.required,Validators.email]),
    password:new FormControl("",[Validators.minLength(3),

      Validators.required])

  }
  )

  handleLogin(){
    console.log(this.loginForm.value);

  }

  reset(){
    this.loginForm.setValue(
      {
        name:"",
        email:"",
        password:""
      }
    )
  }

}
