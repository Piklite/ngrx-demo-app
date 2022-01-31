import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListeComponent } from './containers/todo-liste/todo-liste.component';
import { TodoListesPageComponent } from './pages/todo-listes-page/todo-listes-page.component';

const routes: Routes = [{ path: '', component: TodoListesPageComponent, children: [{ path: ':listeId', component: TodoListeComponent }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoListesRoutingModule {}
