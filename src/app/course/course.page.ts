import { Component, OnInit, OnDestroy } from '@angular/core';

import { CourseService } from '../course.service'; // model
import { Course } from '../models/course'; // service

import { Subscription } from 'rxjs'; // for retreive data and unsubscrib() data

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit, OnDestroy {

  courses: Course[]; // declare variable for storing data from backend
  sub: Subscription;

  // (injection) declare service
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    // subscribe the data from service
    this.sub = this.courseService.getCourse().subscribe(
      (courses) => {
        // retreive data from backend(courses array) then store it in 'courses' variable
        this.courses = courses;
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
