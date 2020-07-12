import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServersListComponent } from './components/servers-list/servers-list.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ServersListComponent }
    ])
  ],
  declarations: [
    ServersListComponent
  ]
})
export class ServersModule {
}
