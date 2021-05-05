import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  userDetail = new User();

  constructor(private service:EGrowthService) { }

  ngOnInit(): void {
    this.userDetail = this.service.getLoggedInuser();
  }

}
