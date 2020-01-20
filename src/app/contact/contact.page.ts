import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit, OnDestroy {

  companyName: string;
  companyWebsite: string;
  phone: string;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private storage: Storage,
  ) {
    this.companyName = this.route.snapshot.paramMap.get('companyName');
    this.companyWebsite = this.route.snapshot.paramMap.get('companyWebsite');
  }

  ngOnInit() {
    this.storage.get('phone').then((value) => {
      this.phone = value;
    });
  }

  goToHome() {
    this.navCtrl.navigateRoot('/home');
  }

  ngOnDestroy(): void {
    this.storage.remove('phone');
  }
}
