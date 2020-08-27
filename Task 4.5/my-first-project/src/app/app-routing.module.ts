import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';

import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'bikes', component: BikesComponent },
  { path: 'detail/:id', component: BikeDetailComponent },
  // {
  //   path: 'orders',
  //   loadChildren: () =>
  //     import('./order/order.module').then((m) => m.OrderModule),
  // },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
