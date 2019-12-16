import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id: number;
  title: string;
  details: any[];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private navController: NavController,
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.title = this.route.snapshot.paramMap.get('title');
  }

  ngOnInit() {
    this.courseService.getCourseDetail(this.id).subscribe(
      details => {
        this.details = details;
      }
    );
  }

  itemSelected(ch) {
    this.navController.navigateForward(['/youtube', { url: ch.ch_url, title: ch.ch_title }]);
  }
}
