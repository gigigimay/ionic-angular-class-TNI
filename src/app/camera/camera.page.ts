import { Component, OnInit } from '@angular/core';
import { CameraOptions } from '@ionic-native/camera';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  myImg: any;

  constructor(private camera: Camera) { }

  ngOnInit() {

  }

  takePictures() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 400,
      targetHeight: 400,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      this.myImg = 'data:image/jpeg;base64,' + imageData;
    });
  }

}
