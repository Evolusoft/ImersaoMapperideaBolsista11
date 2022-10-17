import { DocumentoIdentificacao } from "./documento-identificacao.model";
import { Endereco } from "./endereco.model";
import { MembroFamilia } from "./membro-familia.model";

export class Pessoa {
    id?: any;
    documento?: DocumentoIdentificacao;
    nome?: string;
    endereco?: Endereco;
    ativo?: boolean;
    dataNascimento?: any;
    familia?: MembroFamilia[];
}

