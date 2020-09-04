import { Injectable } from '@angular/core';
import { dataComponents } from '../assets/data';

import { Observable, of } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data = dataComponents;
  constructor() {}

  getGoods(): Observable<Data[]> {
    return of(this.data);
  }

  addProduct(product) {
    this.data.push(product);
  }

  getBike(id: number): Observable<Data> {
    return of(dataComponents.find((bike) => bike.id === id));
  }
}
