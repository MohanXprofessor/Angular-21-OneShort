import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  constructor(public route:ActivatedRoute){}

  ngOnInit()
  {
    this.route.params.subscribe((parms)=>{
console.log(parms);
    })
  }
}
