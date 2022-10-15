import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-list-pais',
  templateUrl: './list-pais.component.html',
  styleUrls: ['./list-pais.component.css']
})
export class ListPaisComponent implements OnInit {

  paisCollection?: Pais[];
  currentPais: Pais = {};
  currentIndex = -1;
  debug = true;
  sigla = '';
  nome = '';

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.retrievepaises();
  }

  retrievepaises(): void {
    this.paisService.getAll()
      .subscribe(
        data => {
          this.paisCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievepaises();
    this.currentPais = {};
    this.currentIndex = -1;
  }

  setActivePais(pais: Pais, index: number): void {
    this.currentPais = pais;
    this.currentIndex = index;
  }

  removeAllpaises(): void {
    this.paisService.deleteAll()
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchSigla(): void {
    this.currentPais = {};
    this.currentIndex = -1;

    this.paisService.findBySigla(this.sigla)
      .subscribe(
        data => {
          this.paisCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  searchNome(): void {
    this.currentPais = {};
    this.currentIndex = -1;

    this.paisService.findByNome(this.nome)
      .subscribe(
        data => {
          this.paisCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
