// module
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// operator
import { Observable } from 'rxjs';
import { Course } from './models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  apiUrl = 'https://codingthailand.com/api/get_courses.php';
  apiUrl2 = 'https://codingthailand.com/api/get_course_detail.php?';

  constructor(private http: HttpClient) { }

  // method for retreiving data from backend
  // return Observable<Course[]>
  getCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  // retreive cource detail data, instead of using model, here we use `any` (we are lazy!)
  getCourseDetail(id: number): Observable<any[]> {
    const params = { course_id: id.toString() };
    return this.http.get<any[]>(this.apiUrl2, { params });
  }
}
