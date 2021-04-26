import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Electivedetail } from 'src/app/models/electivedetail';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-home-elective',
  templateUrl: './home-elective.component.html',
  styleUrls: ['./home-elective.component.css']
})
export class HomeElectiveComponent implements OnInit {

  electiveDetails: Electivedetail[]

  constructor(private service: EGrowthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.service.getElective().subscribe(res => {
      this.electiveDetails = res;
      console.log('--- electiveDetails -', this.electiveDetails);

    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    })
  }
  createElective() {
    console.log('--- routing---');
    this.router.navigate(['/staff/createelective']);

  }
}
