import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostService } from './services/post-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AngularAPIcall');
  constructor(private postservice: PostService) {}

  posts: any = [];

  getAllPost() {
    this.postservice.getAllPost().subscribe({
      next: (data) => {
       
        // console.log(data);
        this.posts = data.slice(0,10); // among 100 record give us only 10 record
        
      },
      error: (err) => {
        console.error('Error while fetching posts Big ERROR', err);
      },
    });
  }
}
