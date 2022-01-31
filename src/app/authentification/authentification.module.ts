import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionPageComponent } from './containers/connexion-page/connexion-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnexionFormComponent } from './components/connexion-form/connexion-form.component';
import { InfosUtilisateurComponent } from './components/infos-utilisateur/infos-utilisateur.component';

@NgModule({
  declarations: [ConnexionPageComponent, ConnexionFormComponent, InfosUtilisateurComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InfosUtilisateurComponent],
})
export class AuthentificationModule {}
