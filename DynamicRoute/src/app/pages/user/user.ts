import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Userservice } from '../../services/userservice';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  constructor(public service:Userservice){}
users:any=signal("");
  ngOnInit()
  {
   const data= this.service.userDetail()
    this.users.set(data);
    
  }
}
