import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todolist:Todo[]=[];
  constructor() { }

  ngOnInit(): void {
    this.todolist=[
      {"userId": 1, "id": 1, "title": "delectus aut autem", "completed": 
      false},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": 
      false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab", 
      "completed": true}];
  }


}
