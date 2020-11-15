import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacaltydashboardPage } from './facaltydashboard.page';

const routes: Routes = [
  {
    path: '',
    component: FacaltydashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacaltydashboardPageRoutingModule {}
