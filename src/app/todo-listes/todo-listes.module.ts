import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListeComponent } from './containers/todo-liste/todo-liste.component';
import { TodoListesPageComponent } from './pages/todo-listes-page/todo-listes-page.component';
import { TodoListesRoutingModule } from './todo-listes-routing.module';

@NgModule({
  declarations: [TodoListesPageComponent, TodoListeComponent, TodoComponent],
  imports: [CommonModule, TodoListesRoutingModule],
})
export class TodoListesModule {}
