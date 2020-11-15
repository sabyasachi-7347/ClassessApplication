import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonSlide } from '@ionic/angular';
@Component({
  selector: 'app-gustdashboard',
  templateUrl: './gustdashboard.page.html',
  styleUrls: ['./gustdashboard.page.scss'],
})
export class GustdashboardPage implements OnInit {
  // @ViewChild('slideWithNav',{static: true}) slideWithNav: IonSlide;
  // @ViewChild('slideWithNav2',{static: true}) slideWithNav2: IonSlide;
  // @ViewChild('slideWithNav3',{static: true}) slideWithNav3: IonSlide;

  sliderOne: any;
  // sliderTwo: any;
  // sliderThree: any;

   //Configuration for each Slider
   slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3
  };
  aboutUs: boolean = false;
  ourCource: boolean= false;
  whyGenius: boolean= false;
  isLocation: boolean= false;
// sliderOne:any;

  constructor(public menuCtrl:MenuController) { 
    this.menuCtrl.enable(true);
  
    this.sliderOne =
      {
        isBeginningSlide: true, 
        isEndSlide: false,
        slidesItems: [
          {
            id: 1,
            image: '../../assets/img/banner1.jpg'
          },
          {
            id: 2,
            image: '../../assets/img/banner2.jpg'
          },
          {
            id: 3,
            image: '../../assets/img/banner3.jpg'
          },
          {
            id: 4,
            image: '../../assets/img/banner4.jpg'
          },
          {
            id: 5,
            image: '../../assets/img/banner5.jpg'
          },
          {
            id: 6,
            image: '../../assets/img/banner6.jpg'
          }
        ]
      };

  
  }

  ngOnInit() {
  }

  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }
 
  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }
 
  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }
 
  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }
 
  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }


  chanage(val){
    if(val == 'aboutus'){
      this.aboutUs = !this.aboutUs;
    }
    if(val == 'ourcource'){
      this.ourCource = !this.ourCource;
    }
    if(val == 'whygenius'){
this.whyGenius = !this.whyGenius;
    }
    if(val == 'ourlocation'){
      this.isLocation = !this.isLocation
    }
  }
}
