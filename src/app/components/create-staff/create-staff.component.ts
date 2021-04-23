import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Staff } from 'src/app/models/staff';
import { User } from 'src/app/models/user';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit {

  staff = new Staff();

  constructor(private service:EGrowthService,private toastr: ToastrService,private navigate: Router) { }

 // loggedInUser = new User();

  ngOnInit(): void {
  }
  createStaff(){
    console.log('-- staff details --',this.staff);

     // this.staff.createdBy = this.loggedInUser.userId;
      this.staff.role = 2;// create as user or subordinate
      this.service.registerStaff(this.staff).subscribe(response => {
        if ('emailId already registered with another user' === response['message']) {
          this.toastr.warning('user already present !!');

        } else {
          this.toastr.success("user created successfully !!");
          this.navigate.navigate(['globaladmin/liststaff']);

        }


      }, error => {
        if (500 == error.status) {
          this.toastr.error('everything is broken ', 'Major Error');
        } else if (208 == error.status) {

          this.toastr.warning('user already present !!');
        }

      });
    }


}
