import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServersListComponent } from './components/servers-list/servers-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromServers from './+state/servers.reducer';
import { ServersEffects } from './+state/servers.effects';
import { DataPersistence } from '@nrwl/angular';
import { ServerListService } from './services/server-list.service';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ServersListComponent }
    ]),

    StoreModule.forFeature(
      fromServers.SERVERS_FEATURE_KEY,
      fromServers.reducer
    ),

    EffectsModule.forFeature([ServersEffects])
  ],
  providers: [
    DataPersistence,
    ServerListService
  ],
  declarations: [ServersListComponent]
})
export class ServersModule {
}
