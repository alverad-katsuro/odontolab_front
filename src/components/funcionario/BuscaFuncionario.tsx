import { Label, ListGroup } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { SystemUserFind } from "../../model/edge/SystemUserFind";
import { SystemUserModel } from "../../model/kernel/SystemUserModel";
import Busca from "../inputs/Busca";


type BuscaFuncionarioProps = {
    onClick: () => void;
    onChange(nomeBusca: string): void;
    valueSearch: string;
    funcionarios: SystemUserModel[];
    onSelect(funcionarioEscolhido:SystemUserModel): void;
    funcionarioEscolhido: SystemUserModel | null;
}

export default function BuscaFuncionario(props: BuscaFuncionarioProps) {
    return (
        <>
            <div className="px-4 my-10 sm:px-32 w-full">
                    <Busca onClick={props.onClick} valueSearch={props.valueSearch} onChange={props.onChange} className={"rounded-b-none"} ></Busca>
                    {props.funcionarios.length > 0 ?
                        <>
                            <div className="w-full overflow-y-auto max-h-40 pb-2">
                                <ListGroup className="rounded-t-none">
                                    {props.funcionarios.map((e) => {
                                        return (
                                            <ListGroup.Item onClick={() => {props.onSelect(e);}}>
                                                {e.susrLogin} | {e.pessoa?.pesNome} | {e.pessoa?.pesCpf} | {e.pessoa?.pesStatus}
                                            </ListGroup.Item>
                                        )
                                    })}
                                </ListGroup>
                            </div>
                        </>
                        : <></>
                    }
            </div>
        </>
    )
}