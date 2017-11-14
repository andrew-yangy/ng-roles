import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RolesModule } from 'ng-roles';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, RolesModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
