import {BrowserModule} from '@angular/platform-browser';

import {NgModule} from '@angular/core';

import {MaterialModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent, DialogContent} from './app.component';
import {NavComponent,} from './nav/nav.component';
import {DemoComponent} from './demo/demo.component';
import {NameChildComponent} from './demo/child.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DialogContent,
    DemoComponent,
    NameChildComponent
  ],
  entryComponents: [DialogContent],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
