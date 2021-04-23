import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Staff } from '../models/staff';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class EGrowthService {


  constructor(private http:HttpClient,private router: Router) { }
  loggedInUserDetail = new User();
  backendUrl: string = 'http://localhost:2020/';

  holdUserDetails = (user: User) => {
    this.loggedInUserDetail = user;

  }
  getLoggedInuser = () => {
    return this.loggedInUserDetail;
  }

  logOut() {
    this.router.navigate(['']);

  }

  validUserLogin(requestPayLoad: any): Observable<User> {
    return this.http.post<User>(`${this.backendUrl}validatelogin`, requestPayLoad);

  }
  /**
   * staff releated operation start
   */

   registerStaff(staffDetail: Staff) {
    return this.http.post(`${this.backendUrl}registeruser`, staffDetail);

  }
  /**
   * staff releated operation start
   */
}
