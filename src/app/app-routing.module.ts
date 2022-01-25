import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionPageComponent } from './authentification/containers/connexion-page/connexion-page.component';
import { TodoListePageComponent } from './todo-liste/containers/todo-liste-page/todo-liste-page.component';

const routes: Routes = [
  { path: '', component: ConnexionPageComponent },
  { path: 'todo', component: TodoListePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
