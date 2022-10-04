import { UnidadeFederativa } from "./unidade-federativa.model";
import { Bairro } from "./bairro.model";

export class Cidade {
    id?: any;
    uf?: UnidadeFederativa;
    codigo?: number;
    nome?: string;
    bairros?: Bairro[];
    bairrosDesativados?: Bairro[];
}

