import { Component, OnInit } from '@angular/core';
import { dataComponents } from '../../assets/data';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss'],
})
export class BikesComponent implements OnInit {
  bikes = dataComponents;

  constructor() {}

  ngOnInit(): void {}
}
