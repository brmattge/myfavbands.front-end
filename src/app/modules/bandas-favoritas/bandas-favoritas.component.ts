import { Component, OnInit } from '@angular/core';
import { FilterUtils } from 'primeng/api';
import { CadastroBandasService } from '../cadastrar-bandas/Services/cadastro-bandas.service';
import { Bandas } from '../cadastrar-bandas/Models/cadastro-bandas.model';

@Component({
    selector: 'app-bandas-favoritas',
    templateUrl: './bandas-favoritas.component.html',
    styleUrls: ['./bandas-favoritas.component.scss']
})
export class BandasFavoritasComponent implements OnInit {

    bandasFavoritas: Bandas[];
    colunas: any[];

    constructor(private bandasFavoritasService: CadastroBandasService) { }

    ngOnInit() {

        this.colunas = [
            //{ field: '', header: 'Logo' }
            { field: 'tpRanking', header: 'Ranking' },
            { field: 'nmBanda', header: 'Banda' },
            { field: 'nmEstilo', header: 'Estilo' },
            { field: 'dtDescobrimento', header: 'Descobrimento' }
        ];

        this.obterTodasBandas();

        FilterUtils['custom'] = (value, filter): boolean => {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return parseInt(filter) > value;
        }
    }

    obterTodasBandas() {
        this.bandasFavoritasService.obterTodasBandas()
            .subscribe(dados => this.bandasFavoritas = dados);
    }

}
