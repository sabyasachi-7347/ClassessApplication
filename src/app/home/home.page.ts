import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MenuController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  films: any;
  data: any;
  param: any;
  httpOptions:any;
  lat: number;
  lng: number;
  name: any;
  latitude: string;
  longitude: string;
  constructor(public menuCtrl:MenuController, private http: HTTP, public httpClient: HttpClient,private geolocation: Geolocation) {
    // this.getLocation();
    this.menuCtrl.enable(true);
       }
   apiCall(){
    this.param = {
      name: 'ssp',
      lat:this.lat,
      lang:this.lng
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this.films = this.httpClient.post('https://booksolx.000webhostapp.com/testing.php', JSON.stringify(this.param),this.httpOptions).
    subscribe(data => {
      // this.data = JSON.stringify(data);
      this.data = data;
      alert(this.data);
      for(var i = 0;i<this.data.length;i++){
        this.name=JSON.stringify(this.data[i].name);
        this.name=JSON.parse(this.name);
        this.latitude=JSON.stringify(this.data[i].lat);
        this.latitude=JSON.parse(this.latitude);
        this.longitude=JSON.stringify(this.data[i].lng);
        this.longitude=JSON.parse(this.longitude);
      }
      console.log('my data: ', JSON.stringify(this.data));
      alert(JSON.stringify(data[1].name)+" "+JSON.stringify(data[1].url));
      alert(JSON.stringify(data[1].title)+" "+JSON.stringify(data[1].url));
    });
    console.log("demo");

    // const headers = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // }

    // this.films=this.http.post('https://booksolx.000webhostapp.com/testing.php',this.param,{ 'Content-Type': 'application/json' })
    // .then(async (response) => {
    //   // prints 200
    //  await console.log(JSON.stringify(response));
    //   alert(JSON.stringify(response.data));
    //   alert(JSON.stringify(response.data.name));
    
    //   for(var i = 0;i<this.data.length;i++){
    //     this.name=JSON.stringify(this.data[i].name);
    //     this.name=JSON.parse(this.name);
    //     this.latitude=JSON.stringify(this.data[i].lat);
    //     this.latitude=JSON.parse(this.latitude);
    //     this.longitude=JSON.stringify(this.data[i].lng);
    //     this.longitude=JSON.parse(this.longitude);
    //   }
    // });

   }

getLocation(){
  // while(true){
    this.geolocation.getCurrentPosition(
      {maximumAge: 1000, timeout: 5000,
       enableHighAccuracy: true }
      ).then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            // alert("r succ"+resp.coords.latitude)
            alert(JSON.stringify( resp.coords.latitude)+"   "+JSON.stringify( resp.coords.longitude));
      
            this.lat=resp.coords.latitude
            this.lng=resp.coords.longitude
            },er=>{
              //alert("error getting location")
              alert('Can not retrieve Location')
            }).catch((error) => {
            //alert('Error getting location'+JSON.stringify(error));
            alert('Error getting location - '+JSON.stringify(error))
            });
  }
// }
}
