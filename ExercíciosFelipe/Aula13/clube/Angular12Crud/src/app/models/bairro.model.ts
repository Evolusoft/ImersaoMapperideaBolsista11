import { Cidade } from "./Cidade.model";

export class Bairro {
    id?: any;
    cidade?: Cidade;
    nome?: string;
    cepPadrao?: number;
    ativo?: boolean;
}

