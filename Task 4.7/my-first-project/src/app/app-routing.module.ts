import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';

import { ContactCompleteComponent } from './contact-complete/contact-complete.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'bikes', component: BikesComponent },
  { path: 'detail/:id', component: BikeDetailComponent },
  { path: 'complete', component: OrderCompleteComponent },

  { path: 'contact-complete', component: ContactCompleteComponent },
  { path: 'main', component: MainComponent },
  {
    path: 'order',
    loadChildren: () =>
      import('./order/order.module').then((m) => m.OrderModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'addNewProduct',
    loadChildren: () =>
      import('./add-new-product/add-new-product.module').then(
        (m) => m.AddNewProductModule
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
