import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { FavoritasComponent } from 'src/app/modules/favoritas/favoritas.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CadastrarBandas } from 'src/app/modules/cadastrar-bandas/cadastrar-bandas.component';


@NgModule({
  declarations: [
    DefaultComponent,
    FavoritasComponent,
    CadastrarBandas
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [] //SERVICES AQUI
})
export class DefaultModule { }
