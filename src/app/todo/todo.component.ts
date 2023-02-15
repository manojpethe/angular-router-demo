import { Component } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  list: Array<string> = [];

  constructor() {
    console.log('todo constructor!');
  }

  onButtonclick() {
    console.log('Hello World!');
  }
}
