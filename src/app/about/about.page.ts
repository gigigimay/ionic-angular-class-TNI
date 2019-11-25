import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
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
