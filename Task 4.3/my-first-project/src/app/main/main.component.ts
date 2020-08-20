import { Component, OnInit } from '@angular/core';
import { BikesDataService } from '../bikes-data.service';
import { Data } from '../data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private bikesDataService: BikesDataService) {}

  datA: Data[];

  getData(): void {
    this.datA = this.bikesDataService.getData();
  }

  ngOnInit() {
    this.getData();
  }
}
