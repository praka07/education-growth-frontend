import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Batchdetail } from '../models/batchdetail';
import { Electivedetail } from '../models/electivedetail';
import { SubjectMapping } from '../models/subject-mapping';
import { Subjectdetail } from '../models/subjectdetail';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class EGrowthService {




  constructor(private http: HttpClient, private router: Router) { }
  loggedInUserDetail = new User();
  backendUrl: string = 'http://localhost:2020/';
  subjectMappingResult:SubjectMapping[];

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
  getBatch = (): Observable<Batchdetail[]> => {
    return this.http.get<Batchdetail[]>(`${this.backendUrl}getbatch`);
  }

  getElective = (): Observable<Electivedetail[]> => {
    return this.http.get<Electivedetail[]>(`${this.backendUrl}getelective`);
  }
  createElectiveSubject = (requestPayload: any) => {
    return this.http.post(`${this.backendUrl}createelectivesubject`, requestPayload);
  }

  getLstSubject(): Observable<Subjectdetail[]> {
    return this.http.get<Subjectdetail[]>(`${this.backendUrl}listsubject`);
  }
  updateSubjectDetail(requestPayload: any) {
    return this.http.put(`${this.backendUrl}editsubject`, requestPayload);

  }
  createSubject(request: any) {
    return this.http.post(`${this.backendUrl}createsubject`, request)
  }

  geteletiveByType(value: string): Observable<Electivedetail[]> {
    return this.http.get<Electivedetail[]>(`${this.backendUrl}eletive/${value}`)
  }

  getSubjectDetailsBySemester(semester: number): Observable<Subjectdetail[]> {
    return this.http.get<Subjectdetail[]>(`${this.backendUrl}getsubject/${+semester}`);
  }

  subjectMapping(payload:any){
    return this.http.post(`${this.backendUrl}subjectmapping`,payload);
  }

  getSubjectsListbyStudent(payload:any){
    return this.http.post(`${this.backendUrl}subjectslistbystudent`,payload);
  }
  holdSubjectMapping(mappingObject:SubjectMapping[]){
    this.subjectMappingResult=mappingObject;
  }
  getSubjectMapping(){
    return this.subjectMappingResult;
  }
  markEntry(mappingObject:SubjectMapping[]){
    return this.http.post(`${this.backendUrl}markentry`,mappingObject);

  }
}
