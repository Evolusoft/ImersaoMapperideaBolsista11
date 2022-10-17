import { Pessoa } from "./pessoa.model";
import { TipoMembroFamilia } from "./tipo-membro-familia.model";

export class MembroFamilia {
    id?: any;
    pessoa?: Pessoa;
    tipo?: TipoMembroFamilia;
    membro?: Pessoa;
}

