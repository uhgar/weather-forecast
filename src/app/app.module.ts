import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { GooglePlacesDirective } from './google-places.directive';
import { HttpreqComponent } from './httpreq/httpreq.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    GooglePlacesDirective,
    HttpreqComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
