import { Component } from '@angular/core';
import { IUtilisateur } from './authentification/models/i-utilisateur.interface';
import { AuthentificationService } from './authentification/services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public utilisateur: IUtilisateur | null = this.authentificationService.utilisateur;

  public constructor(private authentificationService: AuthentificationService) {}
}
