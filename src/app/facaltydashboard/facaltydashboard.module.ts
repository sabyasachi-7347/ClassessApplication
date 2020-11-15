import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacaltydashboardPageRoutingModule } from './facaltydashboard-routing.module';

import { FacaltydashboardPage } from './facaltydashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacaltydashboardPageRoutingModule
  ],
  declarations: [FacaltydashboardPage]
})
export class FacaltydashboardPageModule {}
