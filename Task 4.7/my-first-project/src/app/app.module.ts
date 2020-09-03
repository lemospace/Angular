import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { AboutComponent } from './about/about.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';

import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { ContactCompleteComponent } from './contact-complete/contact-complete.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  //{ path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    BikesComponent,
    BikeDetailComponent,

    OrderCompleteComponent,
    ContactCompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZhy0cA7sHZq9mzhpfUdl6msj0lrZdGc8',
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
