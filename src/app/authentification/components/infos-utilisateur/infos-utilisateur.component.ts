import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUtilisateur } from '../../models/i-utilisateur.interface';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-infos-utilisateur',
  templateUrl: './infos-utilisateur.component.html',
  styleUrls: ['./infos-utilisateur.component.scss'],
})
export class InfosUtilisateurComponent {
  public utilisateur$: Observable<IUtilisateur> = this.authentificationService.utilisateur$;

  public constructor(private authentificationService: AuthentificationService) {}
}
