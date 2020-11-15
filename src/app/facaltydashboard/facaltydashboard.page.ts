import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-facaltydashboard',
  templateUrl: './facaltydashboard.page.html',
  styleUrls: ['./facaltydashboard.page.scss'],
})
export class FacaltydashboardPage implements OnInit {

  constructor(public menuCtrl:MenuController) { 
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
  }

}
