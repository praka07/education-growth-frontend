import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewUsersComponent } from '../components/view-users/view-users.component';
import { ChangePasswordComponent } from '../components/change-password/change-password.component';



@NgModule({
  declarations: [ViewUsersComponent,ChangePasswordComponent],
  imports: [
    CommonModule
  ],
  exports:[ViewUsersComponent,ChangePasswordComponent,FormsModule,ReactiveFormsModule]
})
export class UtilityModule { }
