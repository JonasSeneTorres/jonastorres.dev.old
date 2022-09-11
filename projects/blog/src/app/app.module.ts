import {
  DOMPURIFY_CONFIG,
  NgDompurifyModule,
  NgDompurifySanitizer,
} from '@tinkoff/ng-dompurify';
import { LOCALE_ID, NgModule, Sanitizer } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { SharedModule } from './components/shared.module';
import { domPurifyConfig } from './config/dom-purify.config';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePT);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    NgDompurifyModule,
  ],
  exports: [NgDompurifyModule],
  providers: [
    { provide: JsonPipe },
    {
      provide: Sanitizer,
      useClass: NgDompurifySanitizer,
    },
    {
      provide: DOMPURIFY_CONFIG,
      useValue: domPurifyConfig,
    },
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
