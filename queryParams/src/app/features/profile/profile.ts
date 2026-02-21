import { Component, signal } from '@angular/core';
import { createLinkedSignal } from '@angular/core/primitives/signals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  constructor(public router: ActivatedRoute) { }

id=signal(0);
name=signal('');
age=signal(0);


  ngOnInit() {
    this.router.queryParams.subscribe(
      (param) => {
        console.log(param);
        
        this.id.set(param['id'])
        this.name.set(param['name'])
        this.age.set(param['age'])
      }
    )
  }

}
