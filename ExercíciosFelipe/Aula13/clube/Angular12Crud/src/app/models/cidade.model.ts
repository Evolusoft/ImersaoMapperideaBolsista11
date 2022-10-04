import { UnidadeFederativa } from "./UnidadeFederativa.model";
import { Bairro } from "./Bairro.model";

export class Cidade {
    id?: any;
    uf?: UnidadeFederativa;
    codigo?: number;
    nome?: string;
    bairros?: Bairro[];
    bairrosDesativados?: Bairro[];
}

