import { Component } from '@angular/core';
import { ElectronService } from '@rf-manager/communication';

@Component({
  selector: 'rf-manager-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web';

  version: string;

  constructor(private electron: ElectronService) {
    this.version = electron.getAppVersion();
  }
}
