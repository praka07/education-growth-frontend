import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentGenerateReportComponent } from '../student-generate-report/student-generate-report.component';
import { StudentReportComponent } from '../student-report/student-report.component';

import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path: '', component: StudentComponent, children: [{
      path: '', component: StudentGenerateReportComponent
    },
    {
      path: 'home', component: StudentGenerateReportComponent
    },
    {
      path: 'viewreport', component: StudentReportComponent
    },
    {
      path: '', redirectTo: '/student/home', pathMatch: 'full'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
