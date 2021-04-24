import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Batchdetail } from '../models/batchdetail';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class EGrowthService {


  constructor(private http: HttpClient, private router: Router) { }
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
   * user releated operation start
   */

  createUser(staffDetail: User) {
    return this.http.post(`${this.backendUrl}createuser`, staffDetail);

  }
  updateUserDetail(object: User) {
    return this.http.put(`${this.backendUrl}updateuserdetail`, object);

  }
  /**
   * user releated operation start
   */

  getAllUsers = (): Observable<User[]> => {
    let createdBy = this.getLoggedInuser().autoId;
    return this.http.get<User[]>(`${this.backendUrl}getalluser/${createdBy}`);
  }
  createBatch = (requestPayload: any) => {
    return this.http.post(`${this.backendUrl}createbatch`, requestPayload);

  }
  getBatch =():Observable<Batchdetail[]> =>{
    return this.http.get<Batchdetail[]>(`${this.backendUrl}getbatch`);
  }
}
