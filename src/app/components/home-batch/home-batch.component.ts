import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Batchdetail } from 'src/app/models/batchdetail';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-home-batch',
  templateUrl: './home-batch.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./home-batch.component.css']
})
export class HomeBatchComponent implements OnInit {

  batchDetails: Batchdetail[];

  constructor(private service: EGrowthService, private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
    this.service.getBatch().subscribe(res => {
      this.batchDetails = res;
      console.log('-- batchDeatils --', this.batchDetails);

    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    })

  }
  createBatch(){
    this.router.navigate(['/staff/createbatch']);
  }
}
