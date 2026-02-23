import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Userservice {

  userDetail() {
  return [
    {
      id:1,
      name: 'Ajay',
      age: 25,
      email: 'ajaytest@test.com'
    },
    {
      id:2,
      name: 'Neha',
      age: 28,
      email: 'nehatest@test.com'
    },
    {
      id:3,
      name: 'Rahul',
      age: 23,
      email: 'rahultest@test.com'
    },
    {
      id:4,
      name: 'Pooja',
      age: 30,
      email: 'poojatest@test.com'
    },
    {
      id:5,
      name: 'Amit',
      age: 26,
      email: 'amittest@test.com'
    }
  ];
}
  
}
