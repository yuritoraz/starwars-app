"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

const links = [
    {
        name: "personagens",
        path: "/personagens",
    },
    {
        name: "criaturas",
        path: "/criaturas",
    },
    {
        name: "locais",
        path: "/locais",
    },
    {
        name: "dróides",
        path: "/droides",
    },
    {
        name: "veículos",
        path: "/veiculos",
    },
    {
        name: "espécies",
        path: "/especies",
    },
    {
        name: "organizações",
        path: "/organizacoes",
    },
];

const Menu = () => {
    const pathname = usePathname();
    return (
        <div className="mt-2 text-center text-xl justify-center gap-5 hidden xl:flex text-yellow-500">
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${
                            link.path === pathname && "text-accent border-b-2 border-accent"
                            } capitalize font-medium hover:text-accent transition-all`}
                    >

                        {link.name}
                    </Link>
                    
                );
            })}
    </div>
    );
};


export default Menu
