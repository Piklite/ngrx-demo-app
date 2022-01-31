import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionPageComponent } from './authentification/containers/connexion-page/connexion-page.component';

const routes: Routes = [
  { path: '', component: ConnexionPageComponent },
  { path: 'todos', loadChildren: () => import('./todo-listes/todo-listes.module').then((m) => m.TodoListesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
