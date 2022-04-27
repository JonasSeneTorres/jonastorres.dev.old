import { CenteredPanelModule } from './components/centered-box-min-size/centered-panel.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
  ],
  imports: [
    FooterModule,
    HeaderModule,
    CenteredPanelModule,
  ],
  exports: [
    FooterModule,
    HeaderModule,
    CenteredPanelModule,
  ]
})
export class GuideDogModule { }
