import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subjectdetail } from 'src/app/models/subjectdetail';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-home-subject',
  templateUrl: './home-subject.component.html',
  styleUrls: ['./home-subject.component.css']
})
export class HomeSubjectComponent implements OnInit {
  subjectDetails: Subjectdetail[];
  editSubjectDetailModal: boolean = false;
  editSubjectObject: Subjectdetail;
  enableCreateStudentButtonFlag: boolean;

  constructor(private service: EGrowthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.service.getLstSubject().subscribe(res => {
      this.subjectDetails = res;
      console.log('-- batchDeatils --', this.subjectDetails);

    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    })
  }

  openEditModal = (editSubject: Subjectdetail) => {
    this.editSubjectDetailModal = true;
    this.editSubjectObject = editSubject;


  }
  hideConfirmationEditModal() {
    this.editSubjectDetailModal = false;

  }
  closeModal($event) {
    if ($event) {
      this.hideConfirmationEditModal();
      this.service.getLstSubject().subscribe(res => {
        this.subjectDetails = res;
      }, error => {
        this.toastr.error('everything is broken ', 'Major Error');

      })
    }
  }
  createSubject() {
    this.router.navigate(['/staff/createsubject']);

  }
}
