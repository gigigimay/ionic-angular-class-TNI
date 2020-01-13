import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs'; // for retreive data and unsubscrib() data

import { AuthService } from '../auth.service'; // model
import { FeedBack } from '../models/feedback'; // service

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  sub: Subscription;
  feedback: FeedBack;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async signup(value) {
    const { fullname, email, password } = value;

    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      message: 'Saving data'
    });
    await loading.present();

    this.authService.signup(fullname, email, password).subscribe(
      async (f) => {
        this.feedback = f;
        const { message } = this.feedback;
        const alert = await this.alertCtrl.create({
          message,
          buttons: ['Ok']
        });
        await alert.present();
        this.navCtrl.navigateRoot('/');
      },
      async (e) => {
        await loading.dismiss();
      },
      async () => { // dissmiss the Loading when finish fetching data
        await loading.dismiss();
      }
    );
  }
}
