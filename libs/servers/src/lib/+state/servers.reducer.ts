import { ServersAction, ServersActionTypes } from './servers.actions';

export const SERVERS_FEATURE_KEY = 'servers';

/**
 * Interface for the 'Servers' data used in
 *  - ServersState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {
}

export interface ServersState {
  list: Entity[]; // list of Servers; analogous to a sql normalized table
  selectedId?: string | number; // which Servers record has been selected
  loaded: boolean; // has the Servers list been loaded
  error?: any; // last none error (if any)
}

export interface ServersPartialState {
  readonly [SERVERS_FEATURE_KEY]: ServersState;
}

export const initialState: ServersState = {
  list: [],
  loaded: false
};

export function reducer(state: ServersState = initialState, action: ServersAction): ServersState {
  switch (action.type) {
    case ServersActionTypes.ServersLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
