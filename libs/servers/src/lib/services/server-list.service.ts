import { Injectable } from '@angular/core';
import { ElectronService } from '@rf-manager/communication';
import { Observable } from 'rxjs';
import { IpcCommands, RfServer } from '@rf-manager/data';

@Injectable()
export class ServerListService {

  constructor(private electron: ElectronService) {
  }

  getServersList(): Observable<RfServer[]> {
    return this.electron.getData<RfServer[]>(IpcCommands.GetServersList, IpcCommands.ServersList);
  }
}
