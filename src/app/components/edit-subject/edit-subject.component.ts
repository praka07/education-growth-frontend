import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subjectdetail } from 'src/app/models/subjectdetail';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {
  @Input() updateSubjectDetail: Subjectdetail;
  subjectDetailsToUpdate: Subjectdetail;
  @Output() closePopup = new EventEmitter<boolean>();

  constructor(private service: EGrowthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.subjectDetailsToUpdate = JSON.parse(JSON.stringify(this.updateSubjectDetail));
    console.log('-- subject details to update--', this.subjectDetailsToUpdate);



  }

  updateSubjectStatus() {
    let requestPayload: any = {};
    requestPayload.subjectId=this.subjectDetailsToUpdate.subjectId;
    requestPayload.active= this.subjectDetailsToUpdate.active;


    this.service.updateSubjectDetail(requestPayload).subscribe(res => {
      this.toastr.success("updated successfully !!");
      this.closePopup.emit(true);
    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    })

  }

}
