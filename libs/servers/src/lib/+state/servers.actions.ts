import { Action } from '@ngrx/store';
import { Entity } from './servers.reducer';

export enum ServersActionTypes {
  LoadServers = '[Servers] Load Servers',
  ServersLoaded = '[Servers] Servers Loaded',
  ServersLoadError = '[Servers] Servers Load Error',
}

export class LoadServers implements Action {
  readonly type = ServersActionTypes.LoadServers;
}

export class ServersLoadError implements Action {
  readonly type = ServersActionTypes.ServersLoadError;
  constructor(public payload: any) {}
}

export class ServersLoaded implements Action {
  readonly type = ServersActionTypes.ServersLoaded;
  constructor(public payload: Entity[]) {}
}

export type ServersAction = LoadServers | ServersLoaded | ServersLoadError;

export const fromServersActions = {
  LoadServers,
  ServersLoaded,
  ServersLoadError,
};
