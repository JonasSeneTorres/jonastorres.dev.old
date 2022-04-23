import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GuideDogModule } from 'projects/guide-dog/src/lib/guide-dog.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GuideDogModule
  ],
  exports: [
    GuideDogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
