import { Avatar, DarkThemeToggle, Dropdown, Flowbite, Navbar } from 'flowbite-react';
import { useRouter } from 'next/router';
import Logo from '../assets/images/logo.png';
import LogoDark from '../assets/images/logoDark.png';
import Login from '../pages/login';
import SwichDark from './inputs/SwichDark';

export default function NavbarPersonalizada() {
    var route = useRouter()
    var autenticado = false;
    
    return (
        <>
            <Navbar
                fluid={true}
                rounded={true}
                className="bg-slate-100"
            >
                <Navbar.Brand href="/">
                    <img
                        src={Logo.src}
                        className="mr-3 h-6 sm:h-9 dark:hidden"
                        alt="OdontoLab Logo"
                    />
                    <img
                        src={LogoDark.src}
                        className="mr-3 h-6 sm:h-9 hidden dark:block"
                        alt="OdontoLab Logo"
                    />

                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='md:order-10'>
                    <Navbar.Link
                        href="/"
                        active={route.route == "/"}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/funcionario" active={route.route.search("/funcionario") >= 0}>
                        Funcionario
                    </Navbar.Link>
                    <Navbar.Link href="/pessoa" active={route.route.search("/pessoa") >= 0}>
                        Pessoa
                    </Navbar.Link>


                    {autenticado ?
                        <>
                            <div className="flex md:order-2">
                                <Dropdown
                                    arrowIcon={false}
                                    inline={true}
                                    label={<Avatar alt="User settings" rounded={true} />}
                                >
                                    <Dropdown.Header>
                                        <span className="block text-sm">
                                            Bonnie Green
                                        </span>
                                        <span className="block truncate text-sm font-medium">
                                            name@flowbite.com
                                        </span>
                                    </Dropdown.Header>
                                    <Dropdown.Item>
                                        Sign out
                                    </Dropdown.Item>
                                    <Flowbite>
                                        <DarkThemeToggle />
                                    </Flowbite>
                                </Dropdown>
                            </div>
                        </>
                        :
                        <>
                            <SwichDark></SwichDark>
                            <Login></Login>
                        </>
                    }
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}