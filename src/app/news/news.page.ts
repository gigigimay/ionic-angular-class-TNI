import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { NewsService } from '../news.service';
import { Article } from '../models/news';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit, OnDestroy {

  sub: Subscription;
  articles: Article[];
  totalResults: number;
  testja: string;

  constructor(
    private newsService: NewsService,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
    this.getNews();
  }

  async getNews() {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Olaaa'
    });

    await loading.present();

    this.sub = this.newsService.getNews().subscribe(
      (news) => {
        this.totalResults = news.totalResults;
        this.articles = news.articles;
      },
      async (error) => {
        await loading.dismiss(); // dissmiss the Loading when there is error
      },
      async () => {
        await loading.dismiss(); // dissmiss the Loading when finish fetching data
      },
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
