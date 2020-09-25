import { Component, OnInit } from '@angular/core';
import { Bandas } from './cadastro-bandas.model';
import { CadastroBandasService } from './cadastro-bandas.service';


@Component({
  selector: 'app-cadastro-bandas',
  templateUrl: './cadastro-bandas.component.html',
  styleUrls: ['./cadastro-bandas.component.scss']
})
export class CadastroBandas implements OnInit {

  cars: Bandas[];

  constructor() { }

  ngOnInit() {
    //this.cadastroBandasService.cadastrarBandas().then(cars => this.cars = cars);
  }

}
