import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

import {enableProdMode} from '@angular/core';
enableProdMode();

import {FusionChartsModule} from 'angular2-fusioncharts';


import FusionCharts = require('fusioncharts');

import Charts = require('fusioncharts/fusioncharts.charts');

import Ocean = require('fusioncharts/themes/fusioncharts.theme.ocean');



import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent}
]

@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    RegisterComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, Ocean)
  ],

  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
