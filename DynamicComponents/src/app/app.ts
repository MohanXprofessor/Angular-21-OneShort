import { Component, signal, ViewChild, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isDisable=signal(false);
  protected readonly title = signal('DynamicComponents');

  @ViewChild("container", { read: ViewContainerRef })
  container:ViewContainerRef |undefined;

  async loaduser(){
    console.log('object');
    this.container?.clear()
    const {User}=await import('./pages/user/user')
    this.container?.createComponent(User)
    this.isDisable.set(true);

  }
}
