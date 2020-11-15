import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormvalidationPage } from './formvalidation.page';

const routes: Routes = [
  {
    path: '',
    component: FormvalidationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormvalidationPageRoutingModule {}
