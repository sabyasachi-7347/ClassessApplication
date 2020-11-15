import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalaryPage } from './galary.page';

const routes: Routes = [
  {
    path: '',
    component: GalaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalaryPageRoutingModule {}
