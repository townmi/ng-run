import {BrowserModule} from '@angular/platform-browser';

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';

import {AppRoutingModule, routedComponents} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    routedComponents
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
