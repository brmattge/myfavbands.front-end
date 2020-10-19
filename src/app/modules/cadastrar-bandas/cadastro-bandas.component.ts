import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Bandas } from './cadastro-bandas.model';
import { CadastroBandasService } from './cadastro-bandas.service';


@Component({
  selector: 'app-cadastro-bandas',
  templateUrl: './cadastro-bandas.component.html',
  styleUrls: ['./cadastro-bandas.component.scss']
})
export class CadastroBandas implements OnInit {

  
  display: boolean = false;
  value: boolean;
  bandasForm: any;  

  bandas: Bandas[];

  constructor(private formbulider: FormBuilder,
              private cadastroBandasService : CadastroBandasService) { }

  ngOnInit() {
    this.bandasForm = this.formbulider.group({  
      cdBanda: [null],  
      nmBanda: [null],
      dsLogo: [null],
      dsEstilo: [null],
      tpRanking: [null],
      idAtivo: [null],
      dtDescobrimento: [null]
    });  
    this.obterTodasBandas();
  }

  showDialog() {
    this.display = true;
  }

  obterTodasBandas() {
    this.cadastroBandasService.obterTodasBandas()
      .subscribe(dados => this.bandas = dados);
  }

  adicionarBanda(banda: Bandas) {
      this.cadastroBandasService.adicionarBanda(banda).subscribe(  
        () => {
          this.obterTodasBandas();
          this.bandasForm.reset();
        }  
      );
  }

}