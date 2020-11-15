import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  year: string;

  constructor() { }

  ngOnInit() {
  }
  show(year){
if(year == '2019'){
this.year='2019';
}
else if(year == '2018'){
  this.year='2018';
}
else if(year == '2017'){
  this.year='2017';
}else{
  this.year='';
}
  }
}
