import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";
import { SubHeader } from "../../feature/sub-header/sub-header";

@Component({
  selector: 'app-user',
  imports: [SubHeader, RouterOutlet],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

}
