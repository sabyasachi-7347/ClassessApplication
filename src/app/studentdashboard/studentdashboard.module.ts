import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentdashboardPageRoutingModule } from './studentdashboard-routing.module';

import { StudentdashboardPage } from './studentdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentdashboardPageRoutingModule
  ],
  declarations: [StudentdashboardPage]
})
export class StudentdashboardPageModule {}
