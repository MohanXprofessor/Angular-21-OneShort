import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  imports: [],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList {
  // Data Type Declaration
  tasks = signal<{ id: number; title: string; completed: boolean }[]>([]);

  title = signal('');

  addTask() {
    if (this.title()) {
      this.tasks.update((item) => [
        ...item,
        {
          id: this.tasks().length,
          title: this.title(),
          completed: false,
        },
      ]);
      this.title.set('');
    } else {
      alert('Task title cannot be empty!');
    }
  }

  deleteTask(id: number) {
    this.tasks.update((items) => items.filter((task) => task.id !== id));
  }
}
