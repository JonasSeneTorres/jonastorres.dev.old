import { RouterModule, Routes } from '@angular/router';

import { ArtigoComponent } from './artigo.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ArtigoComponent,
  },
  {
    path: ':id',
    component: ArtigoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtigoRoutingModule {}
