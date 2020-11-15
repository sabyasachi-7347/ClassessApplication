import { Component, OnInit } from '@angular/core';
import { Router, Event } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { MenuController, Events } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { Camera } from '@ionic-native/camera/ngx';
// import { Chooser, ChooserResult } from '@ionic-native/chooser';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { finalize } from 'rxjs/operators';
// import { DirectiveDirective } from '../directives/directive.directive';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  capturedSnapURL: any = "";
  appPages: any;
  name: any = "";
  fileObj: any = false;
  uri: string;
  filePathUrl: string;
  fileName: string;
  imageExt: string;
  fileBase64: string;
  x: string;
  y: string;
  z: string;
  time: string;
  options: DeviceMotionAccelerometerOptions = {
    frequency: 200
  };
  id: any;
  param: any;
  response: any;
  constructor(public filePath: FilePath, public base64: Base64,
    public localNotifications: LocalNotifications,
    public deviceMotion: DeviceMotion,
    public camera: Camera, public events: Events, public api: ApiService, public menuCtrl: MenuController, public router: Router, public callNumber: CallNumber, private emailComposer: EmailComposer, public fileChooser: FileChooser) {
    this.localNotifications.schedule({
      text: 'Delayed ILocalNotification',
      badge: 2
    });
  }
  check(event) {
    console.log(event);
  }
  ionViewWillEnter() {
    this.x = "";
    this.y = "";
    this.z = "";
    this.time = "";
    this.menuCtrl.enable(false);
  }
  ngOnInit() {
  }
  clicked(ev) {
    if (ev == 'fb') {
      console.log(ev);
      window.open("https://www.facebook.com/geniuskalyaneast/", '_system');
    } else if (ev == 'mail') {
      console.log(ev);
      this.emailComposer.isAvailable().then((available: boolean) => {
        if (available) {
          //Now we know we can send
          let email = {
            to: 'thanksyougenius@gmail.com',
            subject: 'Test',
            body: 'How are you? Nice greetings from sabyasachi',
            isHtml: true
          }

          // Send a text message using default options
          this.emailComposer.open(email);
        }
      });

    } else if (ev == 'phone') {
      console.log(ev);
      this.callNumber.callNumber("+919867970240", true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
    } else if (ev == 'insta') {
      console.log(ev);
      window.open("https://www.instagram.com/geniusacademykalyan/", '_system');
    } else {

    }
  }
  goGuest() {
    localStorage.menuShow = 'guest';
    this.appPages = [
      {
        title: 'Home',
        url: '/home',
        icon: 'home'
      },
      {
        title: 'Prospect',
        url: '/prospects',
        icon: 'list'
      },
      {
        title: 'Programs',
        url: '/programs',
        icon: 'list'
      },
      {
        title: 'About Us',
        url: '/aboutus',
        icon: 'list'
      },
      {
        title: 'Apply Online',
        url: '/applyonline',
        icon: 'list'
      },
      {
        title: 'Results',
        url: '/results',
        icon: 'list'
      },
      {
        title: 'Events',
        url: '/events',
        icon: 'list'
      },
      {
        title: 'Gallary',
        url: '/gallary',
        icon: 'list'
      },
      {
        title: 'Testimonials',
        url: '/testimonials',
        icon: 'list'
      },
      {
        title: 'Logout',
        url: '/login',
        icon: 'key'
      }
    ];
    this.events.publish('staticMenuListResponse', this.appPages);
    this.router.navigateByUrl('/gustdashboard');
  }
  studentLogin() {
    localStorage.menuShow = 'students';
    this.appPages = [
      {
        title: 'Home',
        url: '/home',
        icon: 'home'
      },
      {
        title: 'Timetable',
        url: '/timetable',
        icon: 'list'
      },
      {
        title: 'Attendance',
        url: '/attendance',
        icon: 'list'
      },
      {
        title: 'Test Series',
        url: '/testseries',
        icon: 'list'
      },
      {
        title: 'Previous Results',
        url: '/preresults',
        icon: 'list'
      },
      {
        title: 'Daily Task',
        url: '/tasks',
        icon: 'list'
      },
      {
        title: 'Logout',
        url: '/login',
        icon: 'list'
      }
    ];

    this.events.publish('staticMenuListResponse', this.appPages);
    this.router.navigate(['studentdashboard']);
  }
  teacherLogin() {
    localStorage.menuShow = 'faculty';

    this.appPages = [
      {
        title: 'Home',
        url: '/home',
        icon: 'home'
      },
      {
        title: 'Attendance',
        url: '/attendance',
        icon: 'list'
      },
      {
        title: 'Contacts',
        url: '/contacts',
        icon: 'list'
      },
      {
        title: 'Asset Request',
        url: '/assetrequest',
        icon: 'list'
      },
      {
        title: 'Teaching Assets',
        url: '/teachingassets',
        icon: 'list'
      },
      {
        title: 'Logout',
        url: '/login',
        icon: 'key'
      }
    ];

    this.events.publish('staticMenuListResponse', this.appPages);
    this.router.navigateByUrl('/facaltydashboard');
  }
  start() {
    try {
      this.id = this.deviceMotion.watchAcceleration(this.options).subscribe((acc: DeviceMotionAccelerationData) => {
        this.x = "" + acc.x;
        this.y = "" + acc.y;
        this.z = "" + acc.z;
        this.time = "" + acc.timestamp;
      })
    } catch (error) {
      alert(error);
    }
  }
  stop() {
    this.id.unsubscribe();
  }
  async androidfileChoose() {
    // choose your file from the device
    await this.fileChooser.open().then(async uri => {
      this.uri = uri;
      // get file path
      await this.filePath.resolveNativePath(uri)
        .then(async file2 => {
          alert(JSON.stringify(file2));
          this.filePathUrl = file2;
          this.fileName = this.filePathUrl.substr(this.filePathUrl.lastIndexOf('/') + 1);
          localStorage.fileName = this.fileName;
          alert(JSON.stringify(this.fileName));
          this.imageExt = this.fileName.split('.').reverse()[0];
          if (this.filePathUrl) {
            await this.base64.encodeFile(this.filePathUrl)
              .then((base64File: string) => {
                this.fileBase64 = base64File.split(',')[1];
                localStorage.fileBase64 = this.fileBase64;
                alert(JSON.stringify(this.fileBase64));
                // localStorage.imageExt = this.imageExt;
                // localStorage.mimeType = this.getMIMEtype(this.imageExt);
              }, (err) => {
                console.log('Base 64 err' + JSON.stringify(err));
              });
          }
        })
        .catch(err => console.log(err));
    })
      .catch(e => console.log('Android file choose error uri' + JSON.stringify(e)));
  }
  async takeSnap() {
    await this.api.callCamera(this.camera.PictureSourceType.CAMERA);
    this.capturedSnapURL = localStorage.img;
    alert(localStorage.camFileName);
    this.name = localStorage.camFileName
  }
  async chooseFile() {
    // await this.api.callFile();
    await this.api.callCamera(this.camera.PictureSourceType.PHOTOLIBRARY);
    // this.capturedSnapURL = localStorage.imgChoose;
    this.capturedSnapURL = localStorage.img;
  }
  async callandroidfileChoose() {
    await this.api.androidfileChoose();
    this.capturedSnapURL = localStorage.img;
    alert(this.capturedSnapURL);
    console.log("called");

  }
  async doLoginCall(type){
    this.param = {
      name: 'ssp',
      lat:'',
      lang:''
    };
// await this.api.postAPI(this.param,'testing.php').subscribe((data)=>{
// alert(JSON.stringify(data));
//  });

 await this.api.postAPI(this.param, 'testing.php')
      .pipe(finalize(async () => { alert("Call Complete") }))    // Hide the loading spinner on success or error
      .subscribe((response) => {
        this.response = response;
       console.log(response);
       alert(JSON.stringify(response));        
      },
        error => {
          console.log(error);
        });
  }
}
