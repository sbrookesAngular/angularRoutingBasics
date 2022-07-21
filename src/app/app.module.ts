import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//here you are getting routes passed in
import { AppRoutingModule, routingComponents } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';

/*
these get put in when you generate the components, but the routingComponents in
import { AppRoutingModule, routingComponents } from './app-routing.module';
make for cleaner code
*/
// import { HomeComponent } from './home/home.component';
// import { I3Component } from './i3/i3.component';
// import { I5Component } from './i5/i5.component';
// import { I7Component } from './i7/i7.component';
// import { I9Component } from './i9/i9.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HeroBannerComponent,
    routingComponents
    // HomeComponent,
    // I3Component,
    // I5Component,
    // I7Component,
    // I9Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
