import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { Bandas } from './Models/cadastro-bandas.model';
import { CadastroBandasService } from './Services/cadastro-bandas.service';

interface City {
  tpRanking: string;
}

@Component({
  selector: 'app-cadastro-bandas',
  templateUrl: './cadastro-bandas.component.html',
  styleUrls: ['./cadastro-bandas.component.scss']
})
export class CadastroBandas implements OnInit {

  salvou = false;
  mostrar: boolean = false;
  formulario: any;
  bandas: Bandas[];

  ranking = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' }
  ]

  constructor(private formBuilder: FormBuilder,
              private cadastroBandasService: CadastroBandasService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      cdBanda: [null],
      nmBanda: [null, Validators.required],
      tpRanking: [null, Validators.required],
      nmEstilo: [null, Validators.required],
      dtDescobrimento: [null, Validators.required],
    });
    this.obterTodasBandas();
  }

  mostrarDialogo() {
    this.mostrar = true;
  }

  obterTodasBandas() {
    this.cadastroBandasService.obterTodasBandas()
      .subscribe(dados => this.bandas = dados);
  }

  adicionarBanda(banda: Bandas) {
    this.cadastroBandasService.adicionarBanda(banda).subscribe(
      () => {
        this.salvou = true;
        this.obterTodasBandas();
        this.formulario.reset();
      }
    );
  }

  onFormSubmit() {
    this.salvou = false;
    const banda = this.formulario.value;
    this.adicionarBanda(banda);
    this.formulario.reset();
  }

}