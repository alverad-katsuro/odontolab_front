import { PessoaModel } from "./PessoaModel";

export type SystemUserModel = {
    susrId?: number;
    susrName?: string;
    susrLogin?: string;
    susrPassword?: string;
    susrRegdate?: Date;
    susrRegusr?: string;
    susrStatus?: string;
    susrPageredirect?: string;
    susrAgendadpg?: string;
    pessoa?: PessoaModel;
}