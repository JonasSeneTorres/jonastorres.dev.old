import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessibilidadeComponent } from './acessibilidade.component';

const routes: Routes = [{ path: '', component: AcessibilidadeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcessibilidadeRoutingModule { }
