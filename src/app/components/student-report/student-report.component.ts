import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectMapping } from 'src/app/models/subject-mapping';
import { User } from 'src/app/models/user';
import { EGrowthService } from 'src/app/service/e-growth.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.css']
})
export class StudentReportComponent implements OnInit {

  rollNumber:string;
  bacth:string;
  semester:string;
  name:string;
  subjectMappingLst: SubjectMapping[];
  grandTotal:number=0;

  constructor(private service:EGrowthService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.rollNumber=this.service.getLoggedInuser().rollNumber;
    this.subjectMappingLst = this.service.getSubjectMapping();
    this.name= this.service.getLoggedInuser().firstName+" "+ this.service.getLoggedInuser().lastName;
    this.semester= this.activatedroute.snapshot.paramMap.get("semester");
    this.bacth=this.subjectMappingLst[0].academicYear;
    this.subjectMappingLst.forEach(object =>{
      this.grandTotal+= object.totalMarks;

    });



  }

  exportReport() :void{

    /* table id is passed over here */
    let element = document.getElementById('studentReport');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.rollNumber +"-semester -"+this.semester+".xlsx");

  }

}
