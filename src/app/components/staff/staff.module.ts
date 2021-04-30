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
import { MarkEntryComponent } from '../mark-entry/mark-entry.component';
import { SubjectMappingComponent } from '../subject-mapping/subject-mapping.component';
import { Ng2CompleterModule } from 'ng2-completer';
import { MaryEntryFilterComponent } from '../mary-entry-filter/mary-entry-filter.component';


@NgModule({
  declarations: [HomeElectiveComponent,MaryEntryFilterComponent,StaffComponent,CreateStudentComponent
    ,HomeBatchComponent,CreateBatchComponent,CreateElectiveComponent,
    HomeSubjectComponent,CreateSubjectComponent,EditSubjectComponent,MarkEntryComponent,SubjectMappingComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    UtilityModule,
    Ng2CompleterModule
  ]
})
export class StaffModule { }
