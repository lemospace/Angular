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
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { ContactCompleteComponent } from './contact-complete/contact-complete.component';

import { DataService } from './data.service';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },

  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    BikesComponent,
    BikeDetailComponent,
    EditDetailComponent,
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
