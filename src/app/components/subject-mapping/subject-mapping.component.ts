import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { EGrowthService } from 'src/app/service/e-growth.service';
import { CompleterService, CompleterData } from 'ng2-completer';
import { Subjectdetail } from 'src/app/models/subjectdetail';
import { Electivedetail } from 'src/app/models/electivedetail';

@Component({
  selector: 'app-subject-mapping',
  templateUrl: './subject-mapping.component.html',
  styleUrls: ['./subject-mapping.component.css']
})
export class SubjectMappingComponent implements OnInit {

  studentDetails: User[];
  dataService: CompleterData;
  searchStr: string;
  subjectObject = new Subjectdetail();
  selectedElectiveType: string;
  selectedElective: string;
  electives: Electivedetail[];
  subjectDetails: Subjectdetail[];
  selectedSubject:string;
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

  electiveTypes = [
    {
      'id': 1,
      'electiveType': 'E1'

    }
    ,
    {
      'id': 2,
      'electiveType': 'E2'

    }

  ];

  constructor(private service: EGrowthService, private toastr: ToastrService, private completerService: CompleterService) { }

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

    this.selectedElectiveType = ''; // make drop down proper
    this.selectedElective = '';
    this.subjectObject.semester = '';
    this.selectedSubject='';
  }

  go() {
    let requestPayload:any={};
    let selectedStudent = this.studentDetails.find(x =>x.rollNumber === this.searchStr).autoId;
    requestPayload.studentId = selectedStudent;
    requestPayload.electiveType=this.selectedElectiveType;
    requestPayload.semester=this.subjectObject.semester;
    requestPayload.subjectId=this.selectedSubject;
    requestPayload.electiveId= this.selectedElective;
    requestPayload.createdBy= this.service.getLoggedInuser().autoId;
    console.log('--- mapping payload --',requestPayload);
    this.service.subjectMapping(requestPayload).subscribe(res =>{
      this.toastr.success('Completed Successfully !!');

    }, error => {
      this.toastr.error('Something wrong here');
    });




  }

  selectedType(electiveType: string) {
    this.service.geteletiveByType(electiveType).subscribe(res => {
      this.electives = res;

    }, error => {
      this.toastr.error('Something wrong here');
    })

  }

  getSubjects(semester:number){
    this.service.getSubjectDetailsBySemester(semester).subscribe(res =>{
      this.subjectDetails=res;

    },error =>{
      this.toastr.error('Something wrong here');
    })
  }


}
