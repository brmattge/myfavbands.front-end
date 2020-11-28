import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { BandasFavoritasComponent } from 'src/app/modules/bandas-favoritas/bandas-favoritas.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material';
import { CadastroBandas } from 'src/app/modules/cadastrar-bandas/cadastro-bandas.component';
import { CadastroBandasService } from 'src/app/modules/cadastrar-bandas/Services/cadastro-bandas.service';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FlexModule } from '@angular/flex-layout';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DropdownModule } from "primeng/dropdown";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    DefaultComponent,
    BandasFavoritasComponent,
    CadastroBandas
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    TableModule,
    DialogModule,
    FlexModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    HttpClientModule,
    ReactiveFormsModule,
    CalendarModule,
  ],
  providers: [CadastroBandasService]
})
export class DefaultModule { }
