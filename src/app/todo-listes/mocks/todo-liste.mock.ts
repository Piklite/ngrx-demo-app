import { ITodoListe } from '../models/i-todo-liste.interface';
import { ITodo } from '../models/i-todo.interface';

export const TODOS: ITodo[] = [
  { id: 'todo_01', listeId: 'liste_01', libelle: 'Faire la vaisselle', fait: true },
  { id: 'todo_02', listeId: 'liste_01', libelle: 'Faire les poussières', fait: false },
  { id: 'todo_03', listeId: 'liste_01', libelle: "Passer l'aspirateur", fait: false },
  { id: 'todo_04', listeId: 'liste_01', libelle: 'Passer la serpillère', fait: false },
  { id: 'todo_05', listeId: 'liste_02', libelle: "Jus d'orange", fait: true },
  { id: 'todo_06', listeId: 'liste_02', libelle: 'Café', fait: true },
  { id: 'todo_07', listeId: 'liste_02', libelle: 'Farine', fait: true },
];

export const LISTES: ITodoListe[] = [
  {
    id: 'liste_01',
    libelle: 'Corvées ménagères',
    todos: [],
  },
  {
    id: 'liste_02',
    libelle: 'Liste de courses',
    todos: [],
  },
];
