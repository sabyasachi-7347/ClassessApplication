import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthdaysPage } from './birthdays.page';

const routes: Routes = [
  {
    path: '',
    component: BirthdaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirthdaysPageRoutingModule {}
