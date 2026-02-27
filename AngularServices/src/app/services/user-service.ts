import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor()
  {console.log('User is calling')}


  getUser()
  {
    return[
      {id:1,name:'Ajay',age:15,salary:15000},
      {id:2,name:'Rohan',age:15,salary:20000},
      {id:3,name:'Sham',age:15,salary:25000},
      {id:4,name:'Rohit',age:15,salary:15000},
      {id:5,name:'Aryan',age:15,salary:20000}

    ]

}
}
