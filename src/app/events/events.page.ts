import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  open(eventSelected){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        selectedEvent: JSON.stringify(eventSelected)
      }
    };
    this.router.navigate(['galary'],navigationExtras);
  }
}
