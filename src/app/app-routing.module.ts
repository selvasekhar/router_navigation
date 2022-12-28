import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { CountryListComponent } from './components/country-list/country-list.component';
// import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { AppComponent } from './app.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactAppComponent } from './components/contact-app/contact-app.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'card', component: ContactCardComponent
  },
  {
    path:'about', component:AboutComponent},

    {
      path:'dd', component:ContactAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
