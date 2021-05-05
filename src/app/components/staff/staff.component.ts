import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  userDetail = new User();

  constructor(private service:EGrowthService) { }

  ngOnInit(): void {
    this.userDetail = this.service.getLoggedInuser();
  }

}
