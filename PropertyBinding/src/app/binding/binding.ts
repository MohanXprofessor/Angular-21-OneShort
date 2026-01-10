import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  imports: [],
  templateUrl: './binding.html',
  styleUrl: './binding.css',
})
export class Binding {
  title = 'Property Binding in Angular';

  btnDisable = true;

  open() {
    alert('Button clicked!');
  }

  change() {
    this.btnDisable = !this.btnDisable;
  }
}
