import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subjectdetail } from 'src/app/models/subjectdetail';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css']
})
export class CreateSubjectComponent implements OnInit {

  subjectObject = new Subjectdetail();


  semesters = [{
    'id': 1,
    'semester': 1
  }, {
    'id': 2,
    'semester': 2

  }, {
    'id': 3,
    'semester': 3

  }, {
    'id': 4,
    'semester': 4

  }, {

    'id': 5,
    'semester': 5

  }, {
    'id': 6,
    'semester': 6

  }]

  subjectTypes = [{
    'id': 1,
    'subjectType': 'Core'

  },
  {
    'id': 2,
    'subjectType': 'E1'

  }
    ,
  {
    'id': 3,
    'subjectType': 'E2'

  }
    ,
  {
    'id': 4,
    'subjectType': 'Lab1'

  }
    ,
  {
    'id': 5,
    'subjectType': 'Lab2'

  }
    ,
  {
    'id': 6,
    'subjectType': 'Mini Project'

  }
  ];
  constructor(private service: EGrowthService, private toastr: ToastrService, private touter: Router) { }


  ngOnInit(): void {
    this.subjectObject.subjectType = ''; // make drop down proper
    this.subjectObject.semester = '';
  }

  createSubject() {
    let requestPayload:any={};
    requestPayload.subjectCode=this.subjectObject.subjectCode;
    requestPayload.subjectName=this.subjectObject.subjectName;
    requestPayload.semester= + this.subjectObject.semester;
    requestPayload.credit=this.subjectObject.credit;
    requestPayload.createdBy=this.service.getLoggedInuser().autoId;

    this.service.createSubject(this.subjectObject).subscribe(responseObj => {
      console.log('--- response ---', responseObj);

    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    });

  }

}
