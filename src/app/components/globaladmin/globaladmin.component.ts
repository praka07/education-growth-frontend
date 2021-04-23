import { Component, OnInit } from '@angular/core';
import { EGrowthService } from 'src/app/service/e-growth.service';

@Component({
  selector: 'app-globaladmin',
  templateUrl: './globaladmin.component.html',
  styleUrls: ['./globaladmin.component.css']
})
export class GlobaladminComponent implements OnInit {

  constructor(private service: EGrowthService) { }

  ngOnInit(): void {
  }

  logOut() {

    this.service.logOut();

  }
}
