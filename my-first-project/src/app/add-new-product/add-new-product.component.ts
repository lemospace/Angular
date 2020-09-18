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
  products: Data[];

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
    let data = this.newProductFrom.value;

    this.dataService.createFirebaseData(data).then((res) => {});
    alert('Product has been aded!');
  }

  public myUploader(event) {
    for (const file of event.files) {
      const dataset = this.readFile(file);
    }
  }

  private readFile(file: File) {
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.newProductFrom.controls.imgUrl.setValue(reader.result);
    };
  }
}
