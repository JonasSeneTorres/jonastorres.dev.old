import { RouterModule, Routes } from '@angular/router';

import { ArtigoComponent } from './artigo.component';
import { NgModule } from '@angular/core';
import { ArtigoResolver } from './artigo.resolver';

const routes: Routes = [
  {
    path: '',
    component: ArtigoComponent,
    resolve: {
      artigo: ArtigoResolver,
    },
  },
  {
    path: ':id',
    component: ArtigoComponent,
    resolve: {
      artigo: ArtigoResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtigoRoutingModule {}
