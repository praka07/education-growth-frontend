import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from 'src/app/create-student/create-student.component';
import { CreateBatchComponent } from '../create-batch/create-batch.component';
import { CreateElectiveComponent } from '../create-elective/create-elective.component';
import { CreateSubjectComponent } from '../create-subject/create-subject.component';
import { HomeBatchComponent } from '../home-batch/home-batch.component';
import { HomeElectiveComponent } from '../home-elective/home-elective.component';
import { HomeStudentComponent } from '../home-student/home-student.component';
import { HomeSubjectComponent } from '../home-subject/home-subject.component';
import { MarkEntryComponent } from '../mark-entry/mark-entry.component';
import { MaryEntryFilterComponent } from '../mary-entry-filter/mary-entry-filter.component';
import { SubjectMappingComponent } from '../subject-mapping/subject-mapping.component';
import { ViewUsersComponent } from '../view-users/view-users.component';

import { StaffComponent } from './staff.component';

const routes: Routes = [{
  path: '', component: StaffComponent, children: [{
    path: 'createstudent', component: CreateStudentComponent
  },
  {
    path: 'createbatch', component: CreateBatchComponent
  },
  {
    path: 'home', component: ViewUsersComponent
  }, {
    path: 'homebatch', component: HomeBatchComponent
  },
  {
    path: 'homestudent', component: HomeStudentComponent
  },
  {
    path: 'homeelective', component: HomeElectiveComponent
  },
  {
    path: 'createelective', component: CreateElectiveComponent
  },
  {
    path: 'createsubject', component: CreateSubjectComponent
  },
  {
    path: 'subjectmapping', component: SubjectMappingComponent
  },
  {
    path: 'markentry', component: MarkEntryComponent
  },
  {
    path: 'markentryfilter', component: MaryEntryFilterComponent
  },
  {
    path: 'homesubject', component: HomeSubjectComponent
  },
  {
    path: '', redirectTo: '/staff/home', pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
