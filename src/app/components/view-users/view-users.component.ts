import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  userList: User[];
  editUserDetailModal: boolean = false;
  editUserObject: User;
  enableCreateStudentButtonFlag: boolean;


  constructor(private service: EGrowthService, private toastr: ToastrService, private router:Router) { }

  ngOnInit(): void {
    if (this.service.getLoggedInuser().role == 2) {
      this.enableCreateStudentButtonFlag = true;
    } else {
      this.enableCreateStudentButtonFlag = false;
    }
console.log('--- flag -- ',this.enableCreateStudentButtonFlag);
    this.service.getAllUsers().subscribe(res => {
      this.userList = res;
      console.log('-- userList ---', this.userList);


    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    });
  }

  formateDate(date: Date) {
    console.log('-- formate date --', date);
    var m = new Date(date);
    let formatedDate = m.getDate() + "/" + (m.getMonth() + 1) + "/" + m.getUTCFullYear();
    return formatedDate;
  }
  openEditModal = (editUser: User) => {
    this.editUserDetailModal = true;
    this.editUserObject = editUser;


  }

  hideConfirmationEditModal() {
    this.editUserDetailModal = false;

  }

  closeModal($event) {
    if ($event) {
      this.hideConfirmationEditModal();
      this.service.getAllUsers().subscribe(res => {
        this.userList = res;
      }, error => {
        this.toastr.error('everything is broken ', 'Major Error');

      })
    }
  }

  createStudent(){
    this.router.navigate(['/staff/createstudent']);

  }
}
