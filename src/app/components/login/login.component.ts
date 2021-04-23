import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDetails = new User();

  constructor(private service: EGrowthService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  login(lForm:NgForm) {
    let loginPayLoad: any = {};
    console.log('--userName-- ', lForm.value.username,'password',lForm.value.password);
    loginPayLoad.username = lForm.value.username;
    loginPayLoad.password = lForm.value.password;
    this.service.validUserLogin(loginPayLoad).subscribe(response => {
      this.userDetails = response;
      console.log('-- response --  ', this.userDetails);
      this.service.holdUserDetails(this.userDetails); // store logged in user details
      if (this.userDetails.role == 1) {
        console.log("== load Global Admin page==");
        this.router.navigate(['globaladmin']);

      } else if (this.userDetails.role == 2 ) {
        console.log("== load staff r==");
        this.router.navigate(['staff']);


      }else{
        console.log("== load student ==");
        this.router.navigate(['student']);

      }

    }, error => {
      console.log("error", error.status);
      if (400 == error.status) {
        this.toastr.error('invalid username or password', 'Major Error');

      } else {
        this.toastr.error('everything is broken ', 'Major Error');
      }

    });


  }
}
