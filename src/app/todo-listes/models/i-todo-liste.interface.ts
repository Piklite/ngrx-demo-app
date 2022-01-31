import { ITodo } from './i-todo.interface';

export interface ITodoListe {
  id: string;
  libelle: string;
  todos: ITodo[];
}
