import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CadastrarBandas } from './modules/cadastrar-bandas/cadastrar-bandas.component';
import { FavoritasComponent } from './modules/favoritas/favoritas.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: FavoritasComponent
  }, {
    path: 'posts',
    component: CadastrarBandas
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
