import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewUsersComponent } from '../components/view-users/view-users.component';
import { ChangePasswordComponent } from '../components/change-password/change-password.component';
import { EditUserComponent } from '../components/edit-user/edit-user.component';



@NgModule({
  declarations: [ViewUsersComponent,ChangePasswordComponent,EditUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[ViewUsersComponent,EditUserComponent,ChangePasswordComponent,FormsModule,ReactiveFormsModule]
})
export class UtilityModule { }
