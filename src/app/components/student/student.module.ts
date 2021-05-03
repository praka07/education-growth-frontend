import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentGenerateReportComponent } from '../student-generate-report/student-generate-report.component';
import { UtilityModule } from 'src/app/utility/utility.module';
import { StudentReportComponent } from '../student-report/student-report.component';


@NgModule({
  declarations: [StudentComponent,StudentGenerateReportComponent,StudentReportComponent],
  imports: [
    CommonModule,
    UtilityModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
