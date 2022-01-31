import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IUtilisateur } from '../models/i-utilisateur.interface';
import { delay, tap } from 'rxjs/operators';
import { ICredentials } from '../models/i-credentials.interface';
import { MOCK_UTILISATEUR } from '../mocks/utilisateur.mock';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  public utilisateur$;
  private _utilisateur$: Subject<IUtilisateur> = new Subject();

  public constructor() {
    this.utilisateur$ = this._utilisateur$.asObservable();
  }

  public connecter$(credentials: ICredentials): Observable<IUtilisateur> {
    return of(MOCK_UTILISATEUR).pipe(
      delay(2000),
      tap(() => this._utilisateur$.next(MOCK_UTILISATEUR))
    );
  }

  public deconnecter$(): Observable<void> {
    return of(void 0).pipe(delay(2000));
  }
}
