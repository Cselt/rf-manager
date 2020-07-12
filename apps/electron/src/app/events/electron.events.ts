/**
 * This module is responsible on handling all the inter process communications
 * between the frontend to the electron backend.
 */

import { app, ipcMain, IpcMainEvent } from 'electron';
import { environment } from '../../environments/environment';
import { IpcCommands, RfServer } from '@rf-manager/data';
import { RfService } from '../services/rf.service';

export default class ElectronEvents {
  static bootstrapElectronEvents(): Electron.IpcMain {
    return ipcMain;
  }
}

// Retrieve app version
ipcMain.on('get-app-version', (event: IpcMainEvent) => {
  console.log(`Fetching application version... [v${environment.version}]`);

  event.returnValue = environment.version;
});

ipcMain.on(IpcCommands.GetServersList, async (event: IpcMainEvent) => {
  const service: RfService = RfService.getInstance();
  const servers: RfServer[] = await service.getServersList();
  event.sender.send(IpcCommands.ServersList, servers);
});

// Handle App termination
ipcMain.on('quit', (event, code) => {
  app.exit(code);
});
