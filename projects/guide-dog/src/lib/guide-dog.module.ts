import { NgModule } from '@angular/core';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [
  ],
  imports: [
    FooterModule,
    HeaderModule,
  ],
  exports: [
    FooterModule,
    HeaderModule
  ]
})
export class GuideDogModule { }
