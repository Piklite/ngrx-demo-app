import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionPageComponent } from './containers/connexion-page/connexion-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnexionFormComponent } from './components/connexion-form/connexion-form.component';
import { InfosUtilisateurComponent } from './components/infos-utilisateur/infos-utilisateur.component';
import { StoreModule } from '@ngrx/store';
import { authentificationReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthentificationEffects } from './store/effects/authentification.effects';

@NgModule({
  declarations: [ConnexionPageComponent, ConnexionFormComponent, InfosUtilisateurComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('authentification', authentificationReducers),
    EffectsModule.forFeature([AuthentificationEffects]),
  ],
  exports: [InfosUtilisateurComponent],
})
export class AuthentificationModule {}
