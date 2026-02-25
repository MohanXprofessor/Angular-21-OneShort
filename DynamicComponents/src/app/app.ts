import { Component, signal, viewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetail } from './pages/user-detail/user-detail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DynamicComponents');

@viewChild("container", { read: ViewContainerRef })

container:ViewContainerRef|undefined



 async loaduser(){
    this.container?.createComponent(UserDetail)
    const {UserDetail}=await import('./pages/user-detail/user-detail')
    
  }
}
