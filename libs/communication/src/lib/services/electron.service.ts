import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';
import { Observable, Subscriber } from 'rxjs';
import { IpcCommands } from '@rf-manager/data';

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

  getData<T>(reqCommand: IpcCommands, resCommand: IpcCommands, data?: any): Observable<T> {
    return new Observable<T>((subscriber: Subscriber<T>) => {
      this._ipc.on(resCommand, (event: Event, arg: T) => {
        subscriber.next(arg);
        subscriber.complete();
      });
      this._ipc.send(reqCommand, data);
    });
  }

  getDataSync<T>(command: IpcCommands, data?: any): T {
    return this._ipc.sendSync(command, data);
  }
}
