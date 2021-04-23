import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobaladminRoutingModule } from './globaladmin-routing.module';
import { GlobaladminComponent } from './globaladmin.component';
import { UtilityModule } from 'src/app/utility/utility.module';
import { CreateStaffComponent } from '../create-staff/create-staff.component';


@NgModule({
  declarations: [GlobaladminComponent,CreateStaffComponent],
  imports: [
    CommonModule,
    UtilityModule,
    GlobaladminRoutingModule
  ]
})
export class GlobaladminModule { }
