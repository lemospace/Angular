import { Injectable } from '@angular/core';
import { dataComponents } from '../assets/data';

import { Observable, of } from 'rxjs';
import { Data } from './data';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: AngularFirestore) {}
  data = dataComponents;

  getGoods(): Observable<Data[]> {
    return of(this.data);
  }

  addProduct(product) {
    this.data.push(product);
  }

  getBike(id: number): Observable<Data> {
    return of(dataComponents.find((bike) => bike.id === id));
  }

  createData(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('dataComponents')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }
  getData() {
    return this.firestore.collection('dataComponents').snapshotChanges();
  }
}
