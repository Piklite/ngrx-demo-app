import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ICredentials } from '../../models/i-credentials.interface';
import { AuthentificationService } from '../../services/authentification.service';
import { PageConnexionActions } from '../../store/actions';
import { selectConnexionEnCours } from '../../store/selectors/status-authentification.selectors';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss'],
})
export class ConnexionPageComponent {
  public connexionEnCours$: Observable<boolean> = this.store.select(selectConnexionEnCours);

  public constructor(private store: Store) {}

  public connecter(credentials: ICredentials): void {
    this.store.dispatch(PageConnexionActions.connecter({ credentials }));
  }
}
