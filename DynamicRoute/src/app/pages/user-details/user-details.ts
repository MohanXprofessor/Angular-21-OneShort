import { Component, signal } from '@angular/core';
import { Userservice } from '../../services/userservice';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [RouterLink],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
 constructor(public service:Userservice,public route:ActivatedRoute){}
users:any=signal("");
  ngOnInit()
  {
   const data= this.service.userDetail()
   this.route.params.subscribe((param)=>{
    console.log(param['id']);
    const filterdata=data.filter((iteam)=>iteam.id==param['id'])
    this.users.set(filterdata);
   })


    
  }
}
