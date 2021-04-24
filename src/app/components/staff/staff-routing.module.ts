import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from 'src/app/create-student/create-student.component';
import { CreateBatchComponent } from '../create-batch/create-batch.component';
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
