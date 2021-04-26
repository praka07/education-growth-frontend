import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { UtilityModule } from 'src/app/utility/utility.module';
import { CreateStudentComponent } from 'src/app/create-student/create-student.component';
import { CreateBatchComponent } from '../create-batch/create-batch.component';
import { HomeBatchComponent } from '../home-batch/home-batch.component';
import { HomeElectiveComponent } from '../home-elective/home-elective.component';
import { CreateElectiveComponent } from '../create-elective/create-elective.component';
import { HomeSubjectComponent } from '../home-subject/home-subject.component';
import { CreateSubjectComponent } from '../create-subject/create-subject.component';
import { EditSubjectComponent } from '../edit-subject/edit-subject.component';


@NgModule({
  declarations: [HomeElectiveComponent,StaffComponent,CreateStudentComponent
    ,HomeBatchComponent,CreateBatchComponent,CreateElectiveComponent,
    HomeSubjectComponent,CreateSubjectComponent,EditSubjectComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    UtilityModule
  ]
})
export class StaffModule { }
