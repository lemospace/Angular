import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { OrderComponent } from './order/order.component';
import { ContactCompleteComponent } from './contact-complete/contact-complete.component';

const routes: Routes = [
  { path: 'bikes', component: BikesComponent },
  { path: 'detail/:id', component: BikeDetailComponent },
  { path: 'complete', component: OrderCompleteComponent },
  { path: 'order', component: OrderComponent },
  { path: 'contact-complete', component: ContactCompleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
