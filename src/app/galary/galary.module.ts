import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalaryPageRoutingModule } from './galary-routing.module';

import { GalaryPage } from './galary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalaryPageRoutingModule
  ],
  declarations: [GalaryPage]
})
export class GalaryPageModule {}
