import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { ServersPartialState } from './servers.reducer';
import { LoadServers, ServersActionTypes, ServersLoaded, ServersLoadError } from './servers.actions';
import { ServerListService } from '../services/server-list.service';
import { RfServer } from '@rf-manager/data';
import { map } from 'rxjs/operators';

@Injectable()
export class ServersEffects {
  @Effect() loadServers$ = this.dataPersistence.fetch(
    ServersActionTypes.LoadServers,
    {
      run: (action: LoadServers, state: ServersPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return this.service.getServersList().pipe(
          map((servers: RfServer[]) => new ServersLoaded(servers))
        );
      },

      onError: (action: LoadServers, error) => {
        console.error('Error', error);
        return new ServersLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ServersPartialState>,
    private service: ServerListService) {
  }
}
