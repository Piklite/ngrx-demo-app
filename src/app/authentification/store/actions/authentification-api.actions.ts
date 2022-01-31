import { createAction, props } from '@ngrx/store';
import { IUtilisateur } from '../../models/i-utilisateur.interface';

export const succesConnexion = createAction(
  '[Authentification / API] Succès de la connexion utilisateur',
  props<{ utilisateur: IUtilisateur }>()
);
export const echecConnexion = createAction('[Authentification / API] Echec de la connexion utilisateur', props<{ erreur: Error }>());
