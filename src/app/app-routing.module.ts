import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [{
  path: 'home', component: HomePageComponent
},
{
  path: 'login', component: LoginComponent
},
{
  path: '', redirectTo: '/home', pathMatch: 'full'
},
  { path: 'globaladmin', loadChildren: () => import('./components/globaladmin/globaladmin.module').then(m => m.GlobaladminModule) },
  { path: 'staff', loadChildren: () => import('./components/staff/staff.module').then(m => m.StaffModule) },
  { path: 'student', loadChildren: () => import('./components/student/student.module').then(m => m.StudentModule) },
{
  path: '**', component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
