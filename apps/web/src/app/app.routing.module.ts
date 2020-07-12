import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/servers-list",
    pathMatch: "full"
  },
  {
    path: "servers-list",
    loadChildren: () => import("@rf-manager/servers").then(m => m.ServersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
