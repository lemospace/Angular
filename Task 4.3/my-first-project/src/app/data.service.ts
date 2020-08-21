import { Injectable } from '@angular/core';
import { dataComponents } from '../assets/data';
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
}
