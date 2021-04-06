import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoremIpsumComponent } from './lorem-ipsum.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LoremIpsumComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
