import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';

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
  filteredCourse: Course[];
  sub: Subscription;

  // (injection) declare service
  constructor(
    private courseService: CourseService,
    private navController: NavController,
  ) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    // subscribe the data from service
    this.sub = this.courseService.getCourse().subscribe(
      (courses) => {
        // retreive data from backend(courses array) then store it in 'courses' variable
        this.courses = courses;
        this.filteredCourse = courses;
      }
    );
  }

  itemSelected(c: Course) {
    this.navController.navigateForward(['/detail', {
      id: c.id,
      title: c.c_title
    }]);
  }

  onChange(e) {
    const { value } = e.target;
    const filter = value.trim();
    // lung Max's
    const matchesFilter = new RegExp(filter, 'i');
    this.filteredCourse = this.courses.filter((c: Course) => matchesFilter.test(c.c_title));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
