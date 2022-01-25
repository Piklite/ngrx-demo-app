import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUtilisateur } from '../models/i-utilisateur.interface';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  public get utilisateur(): IUtilisateur | null {
    return this._utilisateur;
  }
  private _utilisateur: IUtilisateur | null = null;

  public connecter$(credentials: { login: string; motDepasse: string }): Observable<IUtilisateur> {
    const utilisateur = {
      id: '123456',
      nom: 'Mouse',
      prenom: 'Mickey',
    };
    this._utilisateur = utilisateur;
    return of(utilisateur).pipe(delay(2000));
  }

  public deconnecter$(): Observable<void> {
    return of(void 0).pipe(delay(2000));
  }
}
