import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { finalize, map, mergeMap, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { ITodoListe } from '../../models/i-todo-liste.interface';
import { ITodo } from '../../models/i-todo.interface';
import { TodoListeDataService } from '../../services/todo-liste-data.service';

@Component({
  selector: 'app-todo-liste',
  templateUrl: './todo-liste.component.html',
  styleUrls: ['./todo-liste.component.scss'],
})
export class TodoListeComponent {
  public todoListe$: Observable<ITodoListe> = this._getListe$();
  public todos: ITodo[] = [];
  public chargementEnCours: boolean = false;

  private _destroy$ = new Subject();

  public constructor(private todoListeDataService: TodoListeDataService, private activatedRoute: ActivatedRoute) {}

  public ngOnDestroy(): void {
    this._destroy$.next();
  }

  public ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map((params) => params['listeId']),
        tap(() => (this.chargementEnCours = true)),
        mergeMap((listeId) => this.todoListeDataService.getTodos$(listeId)),
        takeUntil(this._destroy$)
      )
      .subscribe((todos) => {
        this.todos = todos;
        this.chargementEnCours = false;
      });
  }

  private _getListe$(): Observable<ITodoListe> {
    return this.activatedRoute.params.pipe(
      map((params) => params['listeId']),
      map((listeId) => this.todoListeDataService.getTodoListeById(listeId))
    );
  }
}
