import { Sidebar } from "flowbite-react";
import { HiUser } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";

export default function SideBarPessoa() {
    return (
        <>
            <Sidebar className="w-fit">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Collapse label="Buscar" icon={AiOutlineSearch}>
                            <Sidebar.Item
                                href="/pessoa"
                                icon={AiOutlineSearch}
                            >
                                Pessoa Fisica
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/pessoa"
                                icon={AiOutlineSearch}
                            >
                                Pessoa Juridica
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                        <Sidebar.Collapse label="Cadastro" icon={FaWpforms}>
                            <Sidebar.Item
                                href="/pessoa/cadastro"
                                icon={FaWpforms}
                            >
                                Pessoa Fisica
                            </Sidebar.Item>

                            <Sidebar.Item
                                href="/pessoa/cadastro"
                                icon={FaWpforms}
                            >
                                Pessoa Juridica
                            </Sidebar.Item>

                        </Sidebar.Collapse>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </>
    )
}