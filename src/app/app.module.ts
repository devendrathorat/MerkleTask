import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorelistComponent } from './storelist/storelist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { StoredetailsComponent } from './storedetails/storedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    StorelistComponent,
    PagenotfoundComponent,
    HeaderComponent,
    StoredetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
