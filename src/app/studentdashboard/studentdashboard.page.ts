import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.page.html',
  styleUrls: ['./studentdashboard.page.scss'],
})
export class StudentdashboardPage implements OnInit {

  constructor(public menuCtrl:MenuController) { 
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
  }

}
