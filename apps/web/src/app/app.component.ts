import { Component } from '@angular/core';
import { ElectronService } from '@rf-manager/communication';
import { IpcCommands } from '@rf-manager/data';

@Component({
  selector: 'rf-manager-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web';

  version: string;

  constructor(private electron: ElectronService) {
    this.version = electron.getDataSync(IpcCommands.GetAppVersion);
  }
}
