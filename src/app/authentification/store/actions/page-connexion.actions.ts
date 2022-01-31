import { createAction, props } from '@ngrx/store';
import { ICredentials } from '../../models/i-credentials.interface';

export const connecter = createAction("[Page Connexion] Tentative de connexion de l'utilisateur", props<{ credentials: ICredentials }>());
