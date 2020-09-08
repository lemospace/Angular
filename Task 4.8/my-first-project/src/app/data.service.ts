import { Injectable } from '@angular/core';
import { dataComponents } from '../assets/data';

import { Observable, of } from 'rxjs';
import { Data } from './data';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

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

  createFirebaseData(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('firebaseData')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }
  getFirebaseData() {
    return this.firestore
      .collection('firebaseData')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Data;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }
}
