import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodoListe } from '../../models/i-todo-liste.interface';
import { TodoListeDataService } from '../../services/todo-liste-data.service';

@Component({
  selector: 'app-todo-listes-page',
  templateUrl: './todo-listes-page.component.html',
  styleUrls: ['./todo-listes-page.component.scss'],
})
export class TodoListesPageComponent {
  public todoListes$: Observable<ITodoListe[]> = this.todoListeDataService.getTodoListes$();

  public constructor(private todoListeDataService: TodoListeDataService) {}
}
