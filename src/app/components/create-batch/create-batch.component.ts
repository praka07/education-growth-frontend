import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-create-batch',
  templateUrl: './create-batch.component.html',
  styleUrls: ['./create-batch.component.css']
})
export class CreateBatchComponent implements OnInit {

  startYear:string;
  endYear:string;

  constructor(private service:EGrowthService,private toastr: ToastrService,private navigate: Router) { }

  ngOnInit(): void {
  }
  createBatch(){
    if(+this.startYear == + this.endYear){
      this.toastr.error('provide valid input');

    }else{

      let requestPayLoad :any ={};
      requestPayLoad.startYear=this.startYear;
      requestPayLoad.endYear=this.endYear;
      this.service.createBatch(requestPayLoad).subscribe(res =>{
        console.log('--- response ---',res);
        this.toastr.success("Batch created successfully !!");
        this.navigate.navigate(['staff/home']);

      },error =>{
        this.toastr.error('Something wrong here');

      })
     }

  }
}
