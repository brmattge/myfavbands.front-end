import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { FavoritasComponent } from 'src/app/modules/favoritas/favoritas.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { CadastroBandas } from 'src/app/modules/cadastrar-bandas/cadastro-bandas.component';
import { ToolbarModule } from 'primeng/toolbar';
import { CadastroBandasService } from 'src/app/modules/cadastrar-bandas/cadastro-bandas.service';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog'
import {ButtonModule} from 'primeng/button';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    DefaultComponent,
    FavoritasComponent,
    CadastroBandas
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    ButtonModule,
    FlexModule,
    FlexLayoutModule
  ],
  providers: [CadastroBandasService] //SERVICES AQUI
})
export class DefaultModule { }
