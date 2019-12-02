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

  constructor(private http: HttpClient) { }

  // method for retreiving data from backend
  // return Observable<Course[]>
  getCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }
}
