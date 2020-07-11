import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';
import { Observable, Subscriber } from 'rxjs';
import { IpcCommands, RfServer } from '@rf-manager/data';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {

  private _ipc: IpcRenderer | undefined = undefined;

  constructor() {
    if (window.require) {
      try {
        this._ipc = window.require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('Electron\'s IPC was not loaded');
    }
  }

  getServersList(): Observable<RfServer[]> {
    console.log("get servers list");
    return new Observable((subscriber: Subscriber<RfServer[]>) => {
      this._ipc.on("servers-list", (event: Event, servers: RfServer[]) => {
        console.log("servers ", servers);
        subscriber.next(servers);
        subscriber.complete();
      });

      this._ipc.send('get-servers-list');
    });
  }

  getAppVersion(): string {
    return this._ipc.sendSync(IpcCommands.GetAppVersion);
  }
}
