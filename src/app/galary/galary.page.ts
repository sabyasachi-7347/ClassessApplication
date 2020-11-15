import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.page.html',
  styleUrls: ['./galary.page.scss'],
})
export class GalaryPage implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) {
    // console.log(this.router);
    console.log(this.route);
    
    this.route.queryParams.subscribe(params => {
console.log(params.selectedEvent);

    })
    
    // console.log(this.router.getCurrentNavigation().extras.state.selectedEvent);
   }

  ngOnInit() {
  }

}
