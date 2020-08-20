import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { dataComponents } from '../../assets/data';
import { CommonModule } from '@angular/common';

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
