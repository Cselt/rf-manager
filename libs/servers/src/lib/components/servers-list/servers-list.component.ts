import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { fromServersActions } from '../../+state/servers.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'rf-servers-list',
  templateUrl: './servers-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServersListComponent implements OnInit {

  constructor(private store: Store<any>) {
    this.store.dispatch(new fromServersActions.LoadServers());
  }

  ngOnInit(): void {
  }

}
