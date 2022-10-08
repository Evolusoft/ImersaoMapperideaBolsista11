import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pais } from 'src/app/models/pais.model';

@Component({
  selector: 'app-details-pais',
  templateUrl: './details-pais.component.html',
  styleUrls: ['./details-pais.component.css']
})
export class DetailsPaisComponent implements OnInit {

  pais: Pais = {
    sigla:'' ,
    codigo: ,
    nome: '',
    ativo: 
  };
  message = '';
  debug = true;


  constructor(
    private paisService: PaisService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPais(this.route.snapshot.params.id);
  }

  getPais(id: string): void {
    this.paisService.get(id)
      .subscribe(
        data => {
          this.pais = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateAtivo(status: boolean): void {
    const data = {
      codigo: this.pais.codigo,
      sigla: this.pais.sigla,
      nome: this.pais.nome,
      ativo: status
    };

    this.message = '';

    this.paisService.update(this.pais.id, data)
      .subscribe(
        response => {
          this.pais.ativo = status;
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'O ativo foi atualizado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  updatePais(): void {
    this.message = '';

    this.paisService.update(this.pais.id, this.pais)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'A entidade PaisEditor foi atualizada com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deletePais(): void {
    this.paisService.delete(this.pais.id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.router.navigate(['/paises']);
        },
        error => {
          console.log(error);
        });
  }
}
