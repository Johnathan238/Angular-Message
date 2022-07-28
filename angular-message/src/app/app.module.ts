import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WaringalertComponent } from './waringalert/waringalert.component';
import { SuccessalertComponent } from './successalert/successalert.component';

@NgModule({
  declarations: [
    AppComponent,
    WaringalertComponent,
    SuccessalertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
