import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FeedBack } from './models/feedback';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://codingthailand.com/api/insert_user.php';

  constructor(private http: HttpClient) { }

  signup(fullname: string, email: string, password: string): Observable<FeedBack> {
    return this.http.post<FeedBack>(this.apiUrl, { fullname, email, password });
  }
}
