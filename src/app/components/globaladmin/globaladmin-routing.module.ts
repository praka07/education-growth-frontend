import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { CreateStaffComponent } from '../create-staff/create-staff.component';
import { ViewUsersComponent } from '../view-users/view-users.component';

import { GlobaladminComponent } from './globaladmin.component';

const routes: Routes = [{
  path: '', component: GlobaladminComponent, children: [{

    path: 'home', component: ViewUsersComponent

  },
  {
    path: 'changepassword', component: ChangePasswordComponent
  },
  {
    path: 'createstaff', component: CreateStaffComponent
  },
  {
    path: '', redirectTo: '/globaladmin/home', pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobaladminRoutingModule { }
