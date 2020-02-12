import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BuilderComponent } from './components/builder/builder.component';
import { LoginComponent } from './components/admin/login/login.component';
import { PanelComponent } from './components/admin/panel/panel.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: HomeComponent },
    { path: 'builder',          component: BuilderComponent},
    { path: 'login' ,           component: LoginComponent},
    { path: 'adminPanel',       component: PanelComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
