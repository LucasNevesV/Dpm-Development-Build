import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { SignupComponent } from './view/main/signup/signup.component';
import { NavTopComponent } from './view/hud/nav-top/nav-top.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './view/main/dashboard/dashboard.component';
import { DataStorageService } from './Data/data-storege.service';
import { FiltersComponent } from './view/main/filters/filters.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatBadgeModule, MatIconModule, MatFormFieldModule, MatDatepickerModule,MatNativeDateModule,MatInputModule } from '@angular/material';
import { DataService } from './Data/data.service';
import { HttpModule } from '@angular/http';
import { SacComponent } from './view/main/sac/sac.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("258934994653626")
        }
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavTopComponent,
    DashboardComponent,
    FiltersComponent,
    SacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatBadgeModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    HttpModule,
    ChartsModule
  ],
  providers: [
    DataStorageService,
    DataService,
    MatNativeDateModule,
    DashboardComponent,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
