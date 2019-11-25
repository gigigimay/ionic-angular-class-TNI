import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  companyName: string;
  companyWebsite: string;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {
    this.companyName = this.route.snapshot.paramMap.get('companyName');
    this.companyWebsite = this.route.snapshot.paramMap.get('companyWebsite');
  }

  ngOnInit() {
  }

  goToHome() {
    this.navCtrl.navigateRoot('/home');
  }
}