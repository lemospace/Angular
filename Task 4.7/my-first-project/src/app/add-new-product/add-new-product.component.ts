import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss'],
})
export class AddNewProductComponent implements OnInit {
  newProducts: Data[] = [
    {
      id: 1,
      imgUrl:
        'https://cyclingmagazine.ca/wp-content/uploads/2018/10/Krypton_A18_2016_red_ultegra_16_1.jpg',
      price: 28000,
      discount: 71,
      main: true,
      shop: 'Canada Bike',
      name: 'Argon 18',
      description:
        'Founded by retired cyclist Gervais Rioux in Montreal in 1989, Argon 18 has grown to distribute bikes aross the world and sponsors a number of professional cycling teams and triathletes. In 2019, Argo 18 sponsores Hugo Houle’s UCI WorldTour team Astana',
      shipping: 'Free shipping',
      discountUntil: '2021-06-02T10:00:00',
      new: true,
      color: ['Blue', 'Grey', 'Orange', 'Black'],
      size: ['S', 'L', 'XL', 'XXL'],
      review: [
        {
          author: 'Michel Delap',
          text: 'Good one, but I have some problem with wheels',
          rating: 4,
        },
      ],
    },
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((res) => {
      this.newProducts = res;
    });
  }
}
