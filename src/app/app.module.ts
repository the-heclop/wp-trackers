import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SidenavToggleService } from './_services/sidenav-toggle.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavBarComponent,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [SidenavToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
