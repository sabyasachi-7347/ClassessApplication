import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirthdaysPageRoutingModule } from './birthdays-routing.module';

import { BirthdaysPage } from './birthdays.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirthdaysPageRoutingModule
  ],
  declarations: [BirthdaysPage]
})
export class BirthdaysPageModule {}
