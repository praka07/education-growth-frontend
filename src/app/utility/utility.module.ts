import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewUsersComponent } from '../components/view-users/view-users.component';
import { ChangePasswordComponent } from '../components/change-password/change-password.component';
import { EditUserComponent } from '../components/edit-user/edit-user.component';
import { OnlynumberDirective } from '../directives/onlynumber.directive';
import { AvatarModule } from 'ngx-avatar';



@NgModule({
  declarations: [ViewUsersComponent,ChangePasswordComponent,EditUserComponent,OnlynumberDirective],
  imports: [
    CommonModule,
    FormsModule,
    AvatarModule,
    ReactiveFormsModule

  ],
  exports:[ViewUsersComponent,EditUserComponent,ChangePasswordComponent,FormsModule,ReactiveFormsModule,OnlynumberDirective,AvatarModule]
})
export class UtilityModule { }
