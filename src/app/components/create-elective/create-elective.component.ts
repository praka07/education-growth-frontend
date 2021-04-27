import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Electivedetail } from 'src/app/models/electivedetail';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-create-elective',
  templateUrl: './create-elective.component.html',
  styleUrls: ['./create-elective.component.css']
})
export class CreateElectiveComponent implements OnInit {

  createElective = new Electivedetail();

  electiveTypes = [{
    'id': 1,
    'electiveType': 'E1'

  },
  {
    'id': 2,
    'electiveType': 'E2'

  }
  ];

  constructor(private service: EGrowthService, private toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.createElective.electiveType = '';
  }

  createElectiveFields() {
    let requestPayload: any = {};
    requestPayload.electiveName = this.createElective.electiveName;
    requestPayload.electiveType = this.createElective.electiveType;
    this.service.createElectiveSubject(requestPayload).subscribe(res => {

      this.toastr.success('created elective subject successfully!!');
      this.router.navigate(['/staff/homesubject']);

    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    })


  }


}
