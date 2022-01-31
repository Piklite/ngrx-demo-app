import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';
import * as fromStatusAuthentification from './status-authentification.reducers';

export interface AuthentificationState {
  status: fromStatusAuthentification.StatusAuthentificationState;
}

export function authentificationReducers(state: AuthentificationState | undefined, action: Action): AuthentificationState {
  return combineReducers({
    status: fromStatusAuthentification.statusAuthentificationReducer,
  })(state, action);
}

export const selectAuthentificationState = createFeatureSelector<AuthentificationState>('authentification');
