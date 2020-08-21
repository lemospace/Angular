import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss'],
})
export class BikesComponent implements OnInit {
  bikes: Data[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getGoods().subscribe((res) => {
      this.bikes = res;
    });
  }
}
