import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GustdashboardPageRoutingModule } from './gustdashboard-routing.module';

import { GustdashboardPage } from './gustdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GustdashboardPageRoutingModule
  ],
  declarations: [GustdashboardPage]
})
export class GustdashboardPageModule {}
