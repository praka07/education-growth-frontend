import { Component, OnInit } from '@angular/core';
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
  constructor(private service: EGrowthService, private toastr: ToastrService, private completerService: CompleterService) { }

  ngOnInit(): void {
    this.subjectMappingLst = this.service.getSubjectMapping();


  }

  saveMarkEntry(sm: SubjectMapping) {
    console.log('--- save ---', sm);
    if (typeof sm.internalMark === "undefined") {
      this.toastr.error('internal mark is mandatory');

    } else if (typeof sm.externalMark === "undefined") {
      this.toastr.error('external mark is mandatory');

    } else {
      sm.total = + sm.internalMark + +sm.externalMark;

    }
  }

  onChangeEvent(sm:SubjectMapping){
    sm.total = + sm.internalMark + +sm.externalMark;

  }



}
