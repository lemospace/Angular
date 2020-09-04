import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss'],
})
export class AddNewProductComponent implements OnInit {
  newProductFrom = new FormGroup({
    id: new FormControl(''),
    imgUrl: new FormControl(''),
    price: new FormControl(''),
    discount: new FormControl(''),
    main: new FormControl(''),
    shop: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    shipping: new FormControl(''),
    discountUntil: new FormControl(''),
    new: new FormControl(''),
    color: new FormControl(''),
    size: new FormControl(''),
    review: new FormGroup({
      author: new FormControl(''),
      text: new FormControl(''),
      rating: new FormControl(''),
    }),
  });

  constructor(private dataService: DataService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    this.dataService.addProduct(this.newProductFrom.value);
    //console.warn(this.newProductFrom.value);
  }
}
