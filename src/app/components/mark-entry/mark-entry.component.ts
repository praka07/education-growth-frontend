import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompleterData, CompleterService } from 'ng2-completer';
import { ToastrService } from 'ngx-toastr';
import { SubjectMapping } from 'src/app/models/subject-mapping';
import { Subjectdetail } from 'src/app/models/subjectdetail';
import { User } from 'src/app/models/user';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-mark-entry',
  templateUrl: './mark-entry.component.html',
  styleUrls: ['./mark-entry.component.css']
})
export class MarkEntryComponent implements OnInit {

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
  subjectMappingLst: SubjectMapping[];
  constructor(private service: EGrowthService, private toastr: ToastrService, private completerService: CompleterService,private router:Router) { }

  ngOnInit(): void {
    this.subjectMappingLst = this.service.getSubjectMapping();


  }

  saveMarkEntry() {
    console.log('----', this.subjectMappingLst);
    let internalMarkStatus = 0;
    let externalMarkStatus = 0;
    this.subjectMappingLst.forEach(object => {



      if (typeof object.internalMarks === "undefined" || object.internalMarks.length == 0) {
        internalMarkStatus++;

      } else if (typeof object.externalMarks === "undefined" || object.externalMarks.length == 0) {

        externalMarkStatus++;
      } else {

      }

    });
    if (internalMarkStatus > 0 || externalMarkStatus > 0) {
      this.toastr.error('external or internal mark is mandatory');

    } else {
     this.service.markEntry(this.subjectMappingLst).subscribe(res =>{
       this.router.navigate(['/staff/markentryfilter']);

     },error =>{
      this.toastr.error('Something wrong here');
     })

    }
  }

  onChangeEvent(sm: SubjectMapping) {
    if (typeof sm.internalMarks !== "undefined" && typeof sm.externalMarks !== "undefined") {
      sm.totalMarks = + sm.internalMarks + +sm.externalMarks;

    }



  }

}
