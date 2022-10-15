import { Cidade } from "./cidade.model";

export class Bairro {
    id?: any;
    cidade?: Cidade;
    nome?: string;
    cepPadrao?: number;
    ativo?: boolean;
}

