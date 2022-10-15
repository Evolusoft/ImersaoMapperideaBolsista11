import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';
import { PaisService } from 'src/app/services/pais.service';

@Component({
selector: 'app-add-pais ',
templateUrl: './add-pais .component.html',
styleUrls: ['./add-pais .component.css']
})
export class AddPaisComponent implements OnInit {
  pais: Pais = {
    sigla:'',
    codigo:0,
    nome:'',
    ativo:
  };
  submitted = false;
  debug = true;


  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
   }
}

   savePais(): void {
      codigo: this.pais.codigo,
      sigla: this.pais.sigla,
      nome: this.pais.nome,
      ativo: this.pais.ativo,
};

    this.paisService.create(data)
      .subscribe(
        response => {
          if (debug) console.log(response); 
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPais(): void {
    this.submitted = false;
    this.debug = true;

    this.pais = {
    sigla:,
    codigo:,
    nome:,
    ativo:
    };
  }
}
