import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CadastroBandas } from './modules/cadastrar-bandas/cadastro-bandas.component';
import { BandasFavoritasComponent } from './modules/bandas-favoritas/bandas-favoritas.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: BandasFavoritasComponent
  }, {
    path: 'posts',
    component: CadastroBandas
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
