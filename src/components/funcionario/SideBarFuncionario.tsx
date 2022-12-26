import { Sidebar } from "flowbite-react";
import { HiKey } from "react-icons/hi";

export default function SideBarFuncionario() {
    return (
        <>
            <div className="w-fit">
                <Sidebar aria-label="Default sidebar example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                href="#"
                                icon={HiKey}
                            >
                                Resetar Senha
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </>
    )
}