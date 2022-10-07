import { Bairro } from "./bairro.model";
import { UnidadeFederativa } from "./unidade-federativa.model";

export class Cidade {
    id?: any;
    uf?: UnidadeFederativa;
    codigo?: number;
    nome?: string;
    bairros?: Bairro[];
}

