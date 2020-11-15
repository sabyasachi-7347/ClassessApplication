import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentdashboardPage } from './studentdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: StudentdashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentdashboardPageRoutingModule {}
