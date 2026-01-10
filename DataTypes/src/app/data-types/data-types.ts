import { Component } from '@angular/core';

@Component({
  selector: 'app-data-types',
  imports: [],
  templateUrl: './data-types.html',
  styleUrl: './data-types.css',
})
export class DataTypes {
  //for any data type
  Mata: any = 10;

  //without data type
  // data;
  data = 20;

  updatedata() {
    this.data = 30;
  }

  //with data type data only store specific data

  marks: number = 90;

  updatemarks() {
    this.marks = 95;
  }
}
