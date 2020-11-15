import { CalendarComponent } from 'ionic2-calendar/calendar';
import { MonthViewComponent } from 'ionic2-calendar/monthview';
import { WeekViewComponent } from 'ionic2-calendar/weekview';
import { DayViewComponent } from 'ionic2-calendar/dayview';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { NgCalendarModule } from 'ionic2-calendar';
// import { Calendar } from '@ionic-native/calendar/ngx';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  // @ViewChild(CalendarComponent,{static:true}) myCal: CalendarComponent;
  eventSource = [];

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  }
  constructor(private alertCtrl: AlertController, public plt: Platform, public cale: NgCalendarModule) {
  }

  loadEvents() {
    this.createRandomEvent();
  }
  onCurrentDateChanged(data) {
    console.log("onCurrentDateChanged  " + data);
  }
  reloadSource(startTime, endTime) {
    console.log("reloadSource  " + startTime + "  " + endTime);
  }
  onEventSelected(data) {
    console.log("onEventSelected  " + data);
  }
  onViewTitleChanged(data) {
    console.log("onViewTitleChanged  " + data);
  }
  onTimeSelected(data) {
    console.log("onTimeSelected  " + data);
  }
  onRangeChanged(data) {
    console.log("onRangeChanged  " + data);
  }
  ngOnInit() {
    this.loadEvents();
  }

  createRandomEvent() {
    var events = [];
    for (var i = 0; i < 50; i++) {
      var date = new Date();
      var eventType = Math.floor(Math.random() * 2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;
      if (eventType === 0) {
        startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
        if (endDay === startDay) {
          endDay += 1;
        }
        endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
        events.push({
          title: "All Days -" + i,
          startTime: startTime,
          endTime: endTime,
          allDays: true
        });
      } else {
        var startMinute = Math.floor(Math.random() * 24 * 60);
        var endMinute = Math.floor(Math.random() * 180) + startMinute;
        startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes());
        endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
        events.push({
          title: "All Days -" + i,
          startTime: startTime,
          endTime: endTime,
          allDays: false
        });
      }
    }
    return events;
  }
  addEvent(cal) { }

  openCal(cal) { }
}
