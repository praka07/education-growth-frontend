import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompleterData, CompleterService } from 'ng2-completer';
import { ToastrService } from 'ngx-toastr';
import { Subjectdetail } from 'src/app/models/subjectdetail';
import { User } from 'src/app/models/user';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-mary-entry-filter',
  templateUrl: './mary-entry-filter.component.html',
  styleUrls: ['./mary-entry-filter.component.css']
})
export class MaryEntryFilterComponent implements OnInit {

  studentDetails: User[];
  dataService: CompleterData;
  subjectObject = new Subjectdetail();
  searchStr: string;
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

  constructor(private service: EGrowthService, private toastr: ToastrService, private completerService: CompleterService
    ,private router:Router) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(res => {
      this.studentDetails = res.filter(object => {
        return object.role == 3;

      });
      console.log('-- staudent details ---', this.studentDetails);
      this.dataService = this.completerService.local(this.studentDetails, 'rollNumber', 'rollNumber');

    }, error => {
      this.toastr.error('Something wrong here');
    });
  }

  getMaryEntryList() {
    let payload: any = {};
    let selectedStudent = this.studentDetails.find(x =>x.rollNumber === this.searchStr).autoId;
    payload.autoId =selectedStudent;
    payload.semester =this.subjectObject.semester;
    payload.createdBy = this.service.getLoggedInuser().autoId;
    this.service.getSubjectsListbyStudent(payload).subscribe(res => {

      this.router.navigate(['/saff/markentry']);

    }, error => {
      this.toastr.error('Something wrong here');
    })

  }

}
