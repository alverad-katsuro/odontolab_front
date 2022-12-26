import { Label, Select, ToggleSwitch } from "flowbite-react";
import { PatternFormat } from "react-number-format";
import { PessoaModel } from "../../model/kernel/PessoaModel";


type FormularioPessoaProps = {
    pessoa: PessoaModel;
    onClickEditar: () => void;
    onClickSalvar: () => void;
    editavel: boolean;
}

export default function FormularioPessoa(props: FormularioPessoaProps) {
    return (
        <>
            <div className="px-4 sm:px-32 w-full">
                <div>

                    <div className="relative z-0 mb-6 w-full group">
                        <input disabled={!props.editavel} type="text" name="nome_pessoa" id="nome_pessoa" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => { props.pessoa.pesNome = e.target.value; }} defaultValue={props.pessoa.pesNome} required />

                        <Label htmlFor="nome_pessoa" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</Label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input disabled={!props.editavel} type="text" name="nome_mae" id="nome_mae" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => { props.pessoa.pesMae = e.target.value; }} defaultValue={props.pessoa.pesMae} required />
                        <Label htmlFor="nome_mae" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome da Mãe</Label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input disabled={!props.editavel} type="email" name="email" id="email" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => { props.pessoa.pesEmail = e.target.value; }} defaultValue={props.pessoa.pesEmail} required />
                            <Label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</Label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input disabled={!props.editavel} type="date" name="nascimento" id="nascimento" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => { props.pessoa.pesNascimento = e.target.value; }} defaultValue={props.pessoa.pesNascimento} required />
                            <Label htmlFor="nascimento" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nascimento</Label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <Select disabled={!props.editavel} name="estadoCivil" id="estadoCivil" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => { props.pessoa.pesCpf = e.target.value; }} value={props.pessoa.pesCpf} required>
                                <option value="AA">Solteiro</option>
                                <option value="AA">Casado</option>
                                <option value="AA">Divorciado</option>
                                <option value="AA">Viuva</option>
                            </Select>
                            <Label htmlFor="estadoCivil" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Estado Civil</Label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                        <Select disabled={!props.editavel} name="estadoCivil" id="estadoCivil" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => { props.pessoa.pesCpf = e.target.value; }} value={props.pessoa.pesCpf} required>
                                <option value="AA">Não</option>
                                <option value="AA">Sim</option>
                            </Select>
                            <Label htmlFor="estadoCivil" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Possui Deficiencia</Label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <PatternFormat disabled={!props.editavel} name="cpf" id="cpf" format='###.###.###-##' className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => { props.pessoa.pesCpf = e.target.value; }} value={props.pessoa.pesCpf} required></PatternFormat>
                            <Label htmlFor="cpf" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CPF</Label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <PatternFormat disabled={!props.editavel} name="floating_phone" id="floating_phone" format='(##) #####-####' mask="_" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => { props.pessoa.pesTelefone = e.target.value; }} value={props.pessoa.pesTelefone} required></PatternFormat>
                            <Label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número de Telefone ((00) 00000-0000))</Label>
                        </div>
                    </div>
                    <div className={props.editavel ? "grid grid-cols-2 gap-5 content-center" : "grid grid-cols-1 gap-5 content-center"}>

                        {props.editavel ?
                            <>
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-[130px] mx-auto" onClick={props.onClickSalvar}>Salvar</button>
                            </> : <></>
                        }

                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-[130px] mx-auto" onClick={props.onClickEditar}>{props.editavel ? "Cancelar" : "Editar"}</button>

                    </div>
                </div>
            </div>
        </>
    )
}