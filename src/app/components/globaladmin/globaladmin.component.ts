import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-globaladmin',
  templateUrl: './globaladmin.component.html',
  styleUrls: ['./globaladmin.component.css']
})
export class GlobaladminComponent implements OnInit {
  userDetail = new User();

  constructor(private service:EGrowthService) { }

  ngOnInit(): void {
    this.userDetail = this.service.getLoggedInuser();
  }

  logOut() {

    this.service.logOut();

  }
}
