import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IUtilisateur } from '../../models/i-utilisateur.interface';
import { AuthentificationService } from '../../services/authentification.service';
import { AuthentificationApiActions, PageConnexionActions } from '../actions';

@Injectable()
export class AuthentificationEffects {
  public connexion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PageConnexionActions.connecter),
      map((action) => action.credentials),
      switchMap((credentials) => this.authentificationService.connecter$(credentials)),
      map((utilisateur: IUtilisateur) => AuthentificationApiActions.succesConnexion({ utilisateur })),
      catchError((erreur: Error) => of(AuthentificationApiActions.echecConnexion({ erreur })))
    )
  );

  public constructor(private actions$: Actions, private authentificationService: AuthentificationService) {}
}
