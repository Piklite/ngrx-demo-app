import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, take, tap } from 'rxjs/operators';
import { LISTES, TODOS } from '../mocks/todo-liste.mock';
import { ITodoListe } from '../models/i-todo-liste.interface';
import { ITodo } from '../models/i-todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoListeDataService {
  private _listes: ITodoListe[] = [];

  public getTodoListes$(): Observable<ITodoListe[]> {
    return of(LISTES).pipe(
      tap((listes) => (this._listes = listes)),
      delay(2000)
    );
  }

  public getTodoListeById(listeId: string): ITodoListe {
    if (this._listes.length === 0) throw Error('Aucune liste chargée');
    const liste = this._listes.find((l) => l.id === listeId);
    if (!liste) throw Error('Aucune liste trouvée');
    return liste;
  }

  public getTodos$(listeId?: string): Observable<ITodo[]> {
    return of(TODOS).pipe(
      map((todos) => {
        if (listeId) {
          return todos.filter((t) => t.listeId === listeId);
        } else {
          return todos;
        }
      }),
      delay(1000)
    );
  }
}
