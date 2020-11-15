import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GustdashboardPage } from './gustdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: GustdashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GustdashboardPageRoutingModule {}
