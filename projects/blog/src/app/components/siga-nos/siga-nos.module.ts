import { CommonModule } from "@angular/common";
import { GuideDogModule } from "projects/guide-dog/src/public-api";
import { NgModule } from "@angular/core";
import { SigaNosComponent } from './siga-nos.component';

@NgModule({
  declarations: [
    SigaNosComponent,
  ],
  imports: [CommonModule, GuideDogModule],
  exports: [
    SigaNosComponent
  ],
})
export class SigaNosModule {}
