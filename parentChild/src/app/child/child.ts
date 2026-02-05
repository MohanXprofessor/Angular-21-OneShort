import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() parentData: string | undefined;

  @Input() studentData: { name: string; age: number }[] | undefined;
}
