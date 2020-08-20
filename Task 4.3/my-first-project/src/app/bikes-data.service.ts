import { Injectable } from '@angular/core';
import { Data } from './data';
import { dataComponents } from '../assets/data';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BikesDataService {
  constructor() {}
  getData(): Data[] {
    return dataComponents;
  }
}
