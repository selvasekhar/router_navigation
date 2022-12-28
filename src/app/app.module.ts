import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { CountryListComponent } from './components/country-list/country-list.component';
// import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactAppComponent } from './components/contact-app/contact-app.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { RxJsLearningComponent } from './rx-js-learning/rx-js-learning.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    // CountryListComponent,
    // CountryDetailsComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactCardComponent,
    RxJsLearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
