import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
  ) {
  }

  ngOnInit() {
    this.storage.ready().then(() => {
      this.storage.set('phone', '1150');
    }
    );
  }

  goToContact() {
    // this.navCtrl.navigateForward('/contact');
    this.navCtrl.navigateForward(['/contact',
      {
        companyName: 'Thai-Nichi',
        companyWebsite: 'https://www.tni.ac.th/'
      }
    ]);
  }
}
