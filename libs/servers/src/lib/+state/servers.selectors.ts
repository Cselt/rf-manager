import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SERVERS_FEATURE_KEY, ServersState } from './servers.reducer';

// Lookup the 'Servers' feature state managed by NgRx
const getServersState = createFeatureSelector<ServersState>(
  SERVERS_FEATURE_KEY
);

const getLoaded = createSelector(
  getServersState,
  (state: ServersState) => state.loaded
);
const getError = createSelector(
  getServersState,
  (state: ServersState) => state.error
);

const getAllServers = createSelector(
  getServersState,
  getLoaded,
  (state: ServersState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getServersState,
  (state: ServersState) => state.selectedId
);
const getSelectedServers = createSelector(
  getAllServers,
  getSelectedId,
  (servers, id) => {
    const result = servers.find((it) => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const serversQuery = {
  getLoaded,
  getError,
  getAllServers,
  getSelectedServers,
};
