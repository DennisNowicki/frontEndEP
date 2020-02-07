import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuilderComponent } from './builder/builder.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './admin/login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'builder', component: BuilderComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login' , component: LoginComponent}
  ];

const config = {
  apiKey: "AIzaSyAp0PvD5tcTHy4CvP1DcKjFerYbi1INLSY",
  authDomain: "frontendep.firebaseapp.com",
  databaseURL: "https://frontendep.firebaseio.com",
  projectId: "frontendep",
  storageBucket: "frontendep.appspot.com",
  messagingSenderId: "195857084939",
  appId: "1:195857084939:web:d59eeb4aeaaad105c50d0e"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuilderComponent,
    NavbarComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
