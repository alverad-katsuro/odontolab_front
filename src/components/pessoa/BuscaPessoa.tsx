import { Label, ListGroup } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { PessoaModel } from "../../model/kernel/PessoaModel";
import Busca from "../inputs/Busca";


type BuscaPessoaProps = {
    onClick: () => void;
    onChange(nomeBusca: string): void;
    valueSearch: string;
    pessoas: PessoaModel[];
    onSelect(pessoaEscolhida:PessoaModel): void;
    pessoaEscolhida: PessoaModel | null;
}

export default function BuscaPessoa(props: BuscaPessoaProps) {
    return (
        <>
            <div className="px-4 my-10 sm:px-32 w-full">
                    <Busca onClick={props.onClick} valueSearch={props.valueSearch} onChange={props.onChange} className={"rounded-b-none"} ></Busca>
                    {props.pessoas.length > 0 ?
                        <>
                            <div className="w-full overflow-y-auto max-h-40 pb-2">
                                <ListGroup className="rounded-t-none">
                                    {props.pessoas.map((e) => {
                                        return (
                                            <>
                                                <ListGroup.Item onClick={() => {props.onSelect(e);}}>
                                                    {e.pesNome} | {e.pesCpf} | {e.pesStatus}
                                                </ListGroup.Item>
                                            </>
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