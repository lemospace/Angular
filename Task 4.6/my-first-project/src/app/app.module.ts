import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';

import { AboutComponent } from './about/about.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { OrderComponent } from './order/order.component';
import { FormatTitlePipe } from './format-title.pipe';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { ContactCompleteComponent } from './contact-complete/contact-complete.component';
import { MustMatchDirective } from './contact-form/must-match.directive';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'order', component: OrderComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactComponent,
    AboutComponent,
    BikesComponent,
    BikeDetailComponent,
    OrderComponent,
    FormatTitlePipe,
    MultiStepFormComponent,
    ContactFormComponent,
    OrderCompleteComponent,
    ContactCompleteComponent,
    MustMatchDirective,
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
