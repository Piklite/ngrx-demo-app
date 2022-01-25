import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { IUtilisateur } from '../../models/i-utilisateur.interface';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss'],
})
export class ConnexionPageComponent {
  public connexionEnCours: boolean = false;

  public connexionForm = new FormGroup({
    login: new FormControl(null, [Validators.required]),
    motDePasse: new FormControl(null, [Validators.required]),
  });

  public constructor(private authentificationService: AuthentificationService) {}

  public connecter(): void {
    const credentials = this.connexionForm.getRawValue();
    this.connexionEnCours = true;
    this.authentificationService
      .connecter$(credentials)
      .pipe(finalize(() => (this.connexionEnCours = false)))
      .subscribe({
        next: (utilisateur: IUtilisateur) => console.log(utilisateur),
        error: (erreur: Error) => console.error(erreur),
      });
  }
}
