import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GuideDogModule } from 'projects/guide-dog/src/lib/guide-dog.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GuideDogModule
  ],
  exports: [
    GuideDogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
