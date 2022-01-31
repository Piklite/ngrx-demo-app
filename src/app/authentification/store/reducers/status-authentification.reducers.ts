import { createReducer, on } from '@ngrx/store';
import { IUtilisateur } from '../../models/i-utilisateur.interface';
import { AuthentificationApiActions, PageConnexionActions } from '../actions';

export interface StatusAuthentificationState {
  connexionEnCours: boolean;
  estConnecte: boolean;
  utilisateur: IUtilisateur | null;
}

export const initialState: StatusAuthentificationState = {
  connexionEnCours: false,
  estConnecte: false,
  utilisateur: null,
};

export const statusAuthentificationReducer = createReducer(
  initialState,
  on(PageConnexionActions.connecter, (state) => ({ ...state, connexionEnCours: true })),
  on(AuthentificationApiActions.succesConnexion, (state, { utilisateur }) => ({
    ...state,
    connexionEnCours: false,
    estConnecte: true,
    utilisateur: utilisateur,
  }))
);
