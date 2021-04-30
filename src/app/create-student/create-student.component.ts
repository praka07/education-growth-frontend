import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Batchdetail } from '../models/batchdetail';
import { User } from '../models/user';
import { EGrowthService } from '../service/e-growth.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  studentInformation = new User();
  loggedInUser = new User();
  batches: Batchdetail[];
  batchValue:number;
  constructor(private service: EGrowthService, private toastr: ToastrService, private navigate: Router) { }

  ngOnInit(): void {
    this.loggedInUser = this.service.getLoggedInuser();
    this.service.getBatch().subscribe(res => {
      this.batches=res;
      console.log('-- available batches --', this.batches);
      this.batchValue= this.batches[0].batchId;

    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    });

  }
  createStudent() {
    console.log('-- student information -', this.studentInformation);
    this.studentInformation.createdBy = this.loggedInUser.autoId;
    this.studentInformation.batch= this.batchValue;
    this.studentInformation.role = 3;// create student
    this.service.createUser(this.studentInformation).subscribe(response => {
      if ('emailId already registered with another user' === response['message']) {
        this.toastr.warning('user already present !!');

      } else {
        this.toastr.success("user created successfully !!");
        this.navigate.navigate(['staff/home']);

      }


    }, error => {
      if (500 == error.status) {
        this.toastr.error('everything is broken ', 'Major Error');
      } else if (208 == error.status) {

        this.toastr.warning('user already present !!');
      }

    });

  }
}
