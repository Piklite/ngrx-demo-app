import { createSelector } from '@ngrx/store';
import { selectAuthentificationState } from '../reducers';

const selectStatusAuthentificationState = createSelector(selectAuthentificationState, (state) => state.status);

export const selectConnexionEnCours = createSelector(selectStatusAuthentificationState, (state) => state.connexionEnCours);
