import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'เกี่ยวกับ',
      url: '/about',
      icon: 'person'
    },
    {
      title: 'คอร์สเรียน',
      url: '/course',
      icon: 'star'
    },
    {
      title: 'ข่าวสาร',
      url: '/news',
      icon: 'paper'
    },
    {
      title: 'โน้ต',
      url: '/note',
      icon: 'book',
    },
    {
      title: 'ลูกค้า',
      url: '/customer',
      icon: 'person',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
