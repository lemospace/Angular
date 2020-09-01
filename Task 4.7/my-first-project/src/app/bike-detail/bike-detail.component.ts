import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from '../data.service';
import { Data } from '../data';
import { dataComponents } from '../../assets/data';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.scss'],
})
export class BikeDetailComponent implements OnInit {
  bike: Data;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBike();
  }

  getBike(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getBike(id).subscribe((bike) => (this.bike = bike));
  }
  goBack(): void {
    this.location.back();
  }
}
