import {
  DOMPURIFY_CONFIG,
  NgDompurifyModule,
  NgDompurifySanitizer,
} from '@tinkoff/ng-dompurify';
import { NgModule, Sanitizer } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { GuideDogModule } from 'projects/guide-dog/src/lib/guide-dog.module';
import { HttpClientModule } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { domPurifyConfig } from './config/dom-purify.config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GuideDogModule,
    NgDompurifyModule,
  ],
  exports: [GuideDogModule, NgDompurifyModule],
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
    // {
    //   provide: DOMPURIFY_HOOKS,
    //   useValue: [
    //     {
    //       name: 'beforeSanitizeAttributes',
    //       hook: (node: Element) => {
    //         node.removeAttribute('id');
    //       },
    //     },
    //   ],
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
