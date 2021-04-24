import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { UtilityModule } from 'src/app/utility/utility.module';
import { CreateStudentComponent } from 'src/app/create-student/create-student.component';
import { CreateBatchComponent } from '../create-batch/create-batch.component';


@NgModule({
  declarations: [StaffComponent,CreateStudentComponent,CreateBatchComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    UtilityModule
  ]
})
export class StaffModule { }
