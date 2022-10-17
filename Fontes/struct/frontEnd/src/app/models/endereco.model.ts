import { UnidadeFederativa } from "./unidade-federativa.model";
import { Cidade } from "./cidade.model";
import { Bairro } from "./bairro.model";
import { PontoReferencia } from "./ponto-referencia.model";

export class Endereco {
    id?: any;
    uf?: UnidadeFederativa;
    cidade?: Cidade;
    bairro?: Bairro;
    logradouro?: string;
    numero?: string;
    complemento?: string;
    pontoReferencia?: PontoReferencia;
}

