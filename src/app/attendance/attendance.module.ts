import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AttendancePageRoutingModule } from './attendance-routing.module';
import { RouterModule } from '@angular/router';
import { AttendancePage } from './attendance.page';
import { NgCalendarModule } from 'ionic2-calendar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: 'attendance',
        component: AttendancePage
      }
    ]),
    AttendancePageRoutingModule,
    NgCalendarModule
  ],
  declarations: [AttendancePage]
})
export class AttendancePageModule {}
