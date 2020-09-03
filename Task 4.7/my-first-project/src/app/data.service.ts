import { Injectable } from '@angular/core';
import { dataComponents } from '../assets/data';
import { newProducts } from './add-new-product/add-new-product.component';
import { Observable, of } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getGoods(): Observable<Data[]> {
    return of(dataComponents);
  }
  getProducts(): Observable<Data[]> {
    return of(newProducts);
  }

  getBike(id: number): Observable<Data> {
    return of(dataComponents.find((bike) => bike.id === id));
  }
}
