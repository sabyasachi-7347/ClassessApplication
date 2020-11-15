import { Injectable } from '@angular/core';
import { Platform, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, from, of } from 'rxjs';
import { retry, catchError, finalize } from 'rxjs/operators';
import { HTTP } from '@ionic-native/http/ngx';
import { map } from 'rxjs/operators';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  capturedSnapURL: any;
  imageResponse: any;
  options: any;
  filePathData: any;
  uri: string;
  filePathUrl: string;
  fileName: string;
  imageExt: string;
  fileBase64: string;
  param: any;
  films: any;
  data: Object;
  BaseURL: any;
  loading: HTMLIonLoadingElement;
  // base_path = 'http://localhost:3000/students';
  constructor(private alertCtrl: AlertController,
    public loadingController: LoadingController,private toastCtrl: ToastController,public platform: Platform, public base64: Base64, public httpClient: HttpClient, public filePath: FilePath, private http: HTTP, private camera: Camera, public imgPicker: ImagePicker, public fileChooser: FileChooser) {

  }
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }

  async showAlert(title, msg) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  isOnline(): boolean {
    return true;
    // if (this.onDevice && this.network.type) {
    //   return this.network.type != 'none';
    // } else {
    //   return navigator.onLine;
    // }
  }

  postAPICall(params): Observable<any> {
    // this.URL = localStorage.BaseURL + methodName;
    // this.param = {
    //   name: 'ssp',
    //   lat:'12.94443433',
    //   lang:'21.9332332'
    // };

    // this.utilityService.logAPICallDetails(parameter, this.URL);

    // return this.http.post(this.URL, parameter, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })})
    // .pipe(
    //   finalize(async () => {
    //     map(response => {
    //       return response;
    //     })
    //   }),
    //     catchError(this.handleError(methodName, []))
    //   );
    // this.URL = localStorage.BaseURL + methodName;
    // const httpOptions =
    // {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };
    //====================================== Create promise================
    return from(new Promise((resolve, reject) => {
      this.http.setDataSerializer('json');
      this.http.setServerTrustMode('pinned').then((data) => {
        alert("pinned sucess" + JSON.stringify(data));
        this.http.post('https://booksolx.000webhostapp.com/testing.php', params, { 'Content-Type': 'application/json' })
          .then(response => {
            console.log(response.status);
            console.log(response);
            try {
              response.data = JSON.parse(response.data);
              resolve(response.data);
            } catch (e) {
              console.error('JSON parsing error');
            }
          })
          .catch(response => {
            console.log("catch " + JSON.stringify(response));
            console.log(response.status);
            console.log(response.error);
            reject(response);
          });

      }).catch((data) => {
        alert("pinned failed" + JSON.stringify(data));
      })

      // return this.http.post(localStorage.BaseURL + methodName, parameter, httpOptions)
      //   .pipe(finalize(async () => {
      //     map(response => {
      //       return response;
      //     })
      //   }),
      //     catchError(this.handleError(methodName, []))
      //   );
    }));
  }
  async presentLoading() {
    // Prepare a loading controller
    this.loading = await this.loadingController.create({
      message: 'Loading...'
    });
    // Present the loading controller
    await this.loading.present();
  }

  postAPI(parameter, methodName): Observable<any> {
    // if (this.appdetails.getEncryptUserName() !== '') {
    //   parameter.Token1 = this.appdetails.getEncryptUserName();
    //   parameter.Token2 = this.appdetails.getEncryptPassword();
    // }

    this.param = {
      name: 'ssp',
      lat: 12.232455333,
      lang: 71.23323444
    };

    // this.logAPIRequest(parameter, this.BaseURL + methodName);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    if (this.isOnline()) {
    if (this.platform.is('desktop') || this.platform.is('mobileweb')) {
      //this.presentLoading();    this.BaseURL + methodName
      return this.httpClient.post('https://booksolx.000webhostapp.com/testing.php', JSON.stringify(this.param),{
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
        .pipe(finalize(async () => {
          //this.loading.dismiss();
          map(response => {
            console.log('not desplay');
            // this.logAPIResponse(response);
            return response;
          })
        }),
          catchError(this.handleError(methodName, []))
        );
    } else {
      //====================================== Create promise================
      return from(new Promise((resolve, reject) => {
        // this.presentLoading();
        this.http.setDataSerializer('json');
        // this.http.setServerTrustMode('pinned').then((res) => {
          // console.log('[SUCCESS] SSL Pinning Starts!' + res);
          // alert('[SUCCESS] SSL Pinning Starts!'+res);     this.BaseURL + methodName
          this.http.post('https://booksolx.000webhostapp.com/testing.php', this.param, { 'Content-Type': 'application/json' })
            .then(response => {
              console.log(response.status);
              console.log(response);
              try {
                response.data = JSON.parse(response.data);
                // this.logAPIResponse(response.data);
                resolve(response.data);
              } catch (e) {
                console.error('JSON parsing error');
              }
            })
            .catch(response => {
              console.log("catch " + JSON.stringify(response));
              console.log(response.status);
              console.log(response.error);
              // this.logAPIResponse(response);
              reject(response);
            });


        // }).catch((res) => {
          // console.log('[FAILED] SSL Pinning Starts!' + res);
          // alert('[FAILED] SSL Pinning Starts!'+res);
      //  })


        // return this.http.post(this.BaseURL+ methodName, parameter, this.httpOptions)
        //   .pipe(finalize(async () => {
        //     map(response => {
        //       this.logAPIResponse(response);
        //       return response;
        //     })
        //   }),
        //     catchError(this.handleError(methodName, []))
        //   );
      })).pipe(finalize(async () => {//send obsevable back
        // this.loading.dismiss();
        map(response => {
          // this.logAPIResponse(response);
          return response;
        })
      }),
        catchError(this.handleError(methodName, []))
      );
    }
    }
    else {
    this.loading.dismiss();
    // this.showAlert(this.appdetails.getAppName(), this.appdetails.getInternetError());
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //console.error(error); // log to console instead
      //console.error(error.status);
      //this.logAPIResponse(error);
      // this.colorlog(JSON.stringify(error), "error");
      // this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  async apiCall1(params) {
    this.param = {
      name: 'ssp',
      lat: 12.232455333,
      lang: 71.23323444
    };
    // this.param = params
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this.films = this.httpClient.post('https://booksolx.000webhostapp.com/testing.php', JSON.stringify(this.param), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).
      subscribe(data => {
        // this.data = JSON.stringify(data);
        this.data = data;
        alert(this.data);
        // for(var i = 0;i<this.data.length;i++){
        //   this.name=JSON.stringify(this.data[i].name);
        //   this.name=JSON.parse(this.name);
        //   this.latitude=JSON.stringify(this.data[i].lat);
        //   this.latitude=JSON.parse(this.latitude);
        //   this.longitude=JSON.stringify(this.data[i].lng);
        //   this.longitude=JSON.parse(this.longitude);
        // }
        // console.log('my data: ', JSON.stringify(this.data));
        // alert(JSON.stringify(data[1].name)+" "+JSON.stringify(data[1].url));
        // alert(JSON.stringify(data[1].title)+" "+JSON.stringify(data[1].url));
      });
    console.log("demo");

    // const headers = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // }

    // this.films=this.http.post('https://booksolx.000webhostapp.com/testing.php',this.param,{ Authorization: 'OAuth2: token' })
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

  // Handle API errors
  handleError1(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  async androidfileChoose() {
    // choose your file from the device
    await this.fileChooser.open().then(async uri => {
      this.uri = uri;
      // get file path
      await this.filePath.resolveNativePath(uri)
        .then(async file2 => {
          this.filePathUrl = file2;
          alert(this.filePathUrl);
          this.fileName = this.filePathUrl.substr(this.filePathUrl.lastIndexOf('/') + 1);
          alert(this.fileName)
          localStorage.fileName = this.fileName;
          this.imageExt = this.fileName.split('.').reverse()[0];
          console.log(this.imageExt);

          if (this.filePathUrl) {
            await this.base64.encodeFile(this.filePathUrl)
              .then((base64File: string) => {
                this.fileBase64 = base64File.split(',')[1];
                alert(this.fileBase64);
                localStorage.fileBase64 = this.fileBase64;
                localStorage.imageExt = this.imageExt;
                localStorage.mimeType = this.getMIMEtype(this.imageExt);
                localStorage.img = 'data:' + this.getMIMEtype(this.imageExt) + ';base64,' + localStorage.fileBase64;
              }, (err) => {
                console.log('Base 64 err' + JSON.stringify(err));
              });
          }
        })
        .catch(err => console.log(err));
    })
      .catch(e => console.log('Android file choose error uri' + JSON.stringify(e)));
  }

  getMIMEtype(extn) {
    let ext = extn.toLowerCase();
    let MIMETypes = {
      txt: "text/plain",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      doc: "application/msword",
      pdf: "application/pdf",
      jpg: "image/jpeg",
      bmp: "image/bmp",
      png: "image/png",
      xls: "application/vnd.ms-excel",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      rtf: "application/rtf",
      ppt: "application/vnd.ms-powerpoint",
      pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    };
    return MIMETypes[ext];
  }

  async callCamera(sourceType) {

    const cameraOptions: CameraOptions = {

      quality: 20,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    await this.camera.getPicture(cameraOptions).then((imageData) => {
      // this.camera.DestinationType.FILE_URI gives file URI saved in local
      // this.camera.DestinationType.DATA_URL gives base64 URI
      alert(JSON.stringify(imageData));
      this.filePath.resolveNativePath(imageData).then(async file2 => {
        this.filePathUrl = file2;
        alert(this.filePathUrl);
        this.fileName = this.filePathUrl.substr(this.filePathUrl.lastIndexOf('/') + 1);
        alert(this.fileName)
        localStorage.camFileName = this.fileName;
        localStorage.fileName = this.fileName;
        this.imageExt = this.fileName.split('.').reverse()[0];
        console.log(this.imageExt);

        // if (this.filePathUrl) {
        //   await this.base64.encodeFile(this.filePathUrl)
        //     .then((base64File: string) => {
        //       this.fileBase64 = base64File.split(',')[1];
        //       alert(this.fileBase64);
        //       localStorage.fileBase64 = this.fileBase64;
        //       localStorage.imageExt = this.imageExt;
        //       localStorage.mimeType = this.getMIMEtype(this.imageExt);
        //     }, (err) => {
        //       console.log('Base 64 err' + JSON.stringify(err));
        //     });
        // }
      })
        .catch(err => console.log(err));
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.capturedSnapURL = base64Image;
      alert(JSON.stringify(this.capturedSnapURL));
      localStorage.img = this.capturedSnapURL;
    }, (err) => {

      console.log(err);
      // Handle error
    });
    // return this.capturedSnapURL;

  }
  callImage() {
    return this.capturedSnapURL;
  }

  async callFile() {
    console.log("fileEntery");

    this.options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      //maximumImagesCount: 3,

      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      width: 200,
      // height: 200,

      // quality of resized image, defaults to 100
      quality: 25,

      // output type, defaults to FILE_URIs.
      // available options are 
      // window.imagePicker.OutputType.FILE_URI (0) or 
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 1
    };
    this.imageResponse = [];
    console.log("filearray", this.imageResponse);
    await this.imgPicker.getPictures(this.options).then((results) => {
      console.log("results", results);

      for (var i = 0; i < results.length; i++) {
        this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
      }
      localStorage.imgChoose = this.imageResponse;
      console.log("filearray after", this.imageResponse);
      console.log("filearray local", localStorage.imgChoose);

    }, (err) => {
      alert(err);
    });


  }
  filePicker() {
    this.fileChooser.open().then((fileuri) => {
      this.filePath.resolveNativePath(fileuri).then((resolvednativepath) => {
        this.filePathData = resolvednativepath;
      })
    })
  }

}
