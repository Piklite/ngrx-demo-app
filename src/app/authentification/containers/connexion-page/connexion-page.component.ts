import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ICredentials } from '../../models/i-credentials.interface';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss'],
})
export class ConnexionPageComponent {
  public connexionEnCours: boolean = false;

  public constructor(private authentificationService: AuthentificationService, private router: Router) {}

  public connecter(credentials: ICredentials): void {
    this.connexionEnCours = true;
    this.authentificationService
      .connecter$(credentials)
      .pipe(finalize(() => (this.connexionEnCours = false)))
      .subscribe({
        error: (erreur: Error) => console.error(erreur),
        complete: () => this.router.navigate(['/todo']),
      });
  }
}
