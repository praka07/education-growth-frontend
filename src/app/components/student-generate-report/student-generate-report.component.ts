import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubjectMapping } from 'src/app/models/subject-mapping';
import { Subjectdetail } from 'src/app/models/subjectdetail';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-student-generate-report',
  templateUrl: './student-generate-report.component.html',
  styleUrls: ['./student-generate-report.component.css']
})
export class StudentGenerateReportComponent implements OnInit {

  subjectObject = new Subjectdetail();
  subjectMapping: SubjectMapping[];

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

  }];

  constructor(private service: EGrowthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.subjectObject.semester = '';
  }
  getReportForm() {

    let payload: any = {};
    payload.autoId = this.service.getLoggedInuser().autoId;
    payload.semester = this.subjectObject.semester;
    payload.createdBy = this.service.getLoggedInuser().autoId;
    this.service.getSubjectsListbyStudent(payload).subscribe(res => {
      this.subjectMapping = res["#result-set-1"];
      console.log('-- response from subjectMapping---', this.subjectMapping);
      this.service.holdSubjectMapping(this.subjectMapping);
      this.router.navigate(['/student/viewreport',{semester: this.subjectObject.semester}]);

    }, error => {
      this.toastr.error('Something wrong here');
    })
  }
}
