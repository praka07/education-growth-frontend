import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Batchdetail } from 'src/app/models/batchdetail';
import { Subjectdetail } from 'src/app/models/subjectdetail';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css']
})
export class CreateSubjectComponent implements OnInit {

  subjectObject = new Subjectdetail();
  batches: Batchdetail[];
  batchValue: number;


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
  constructor(private service: EGrowthService, private toastr: ToastrService, private router: Router) { }


  ngOnInit(): void {
    this.subjectObject.subjectType = ''; // make drop down proper
    this.subjectObject.semester = '';
    this.service.getBatch().subscribe(res => {
      this.batches = res;
      console.log('-- available batches --', this.batches);
      this.batchValue = this.batches[0].batchId;

    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    });
  }

  createSubject() {
    let requestPayload: any = {};
    requestPayload.subjectCode = this.subjectObject.subjectCode;
    requestPayload.subjectName = this.subjectObject.subjectName;
    requestPayload.semester = + this.subjectObject.semester;
    requestPayload.subjectType= this.subjectObject.subjectType;
    requestPayload.credit = this.subjectObject.credit;
    requestPayload.createdBy = this.service.getLoggedInuser().autoId;
    requestPayload.batch=this.batchValue;

    this.service.createSubject(requestPayload).subscribe(responseObj => {
      console.log('--- response ---', responseObj);
      this.toastr.success('Subject created successfully !!');
      this.router.navigate(['/staff/homesubject']);

    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    });

  }

}
