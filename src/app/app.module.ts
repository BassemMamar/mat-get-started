import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ImprintComponent } from './imprint/imprint.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    ImprintComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
