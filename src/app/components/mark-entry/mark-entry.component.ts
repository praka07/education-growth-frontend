import { Component, OnInit } from '@angular/core';
import { CompleterData, CompleterService } from 'ng2-completer';
import { ToastrService } from 'ngx-toastr';
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
  searchStr:string;
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

  constructor(private service: EGrowthService, private toastr: ToastrService, private completerService: CompleterService) { }

  ngOnInit(): void {

  }



}
