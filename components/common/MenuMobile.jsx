"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";


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

const MenuMobile = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="">
                <CiMenuFries />
            </SheetTrigger>
            <SheetContent className="text-xl text-yellow-500 bg-black">
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
                {/*Logo*/}
                <div className="text-center">
                    <Link href="/">
                        <h1 className=" mt-20 mb-20 text-center text-2xl font-semibold">
                            SW-DataBase<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                {/*Menu Mobile*/}
                <nav className="flex flex-col text-center gap-10">
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"
                                    } capitalize font-medium hover:text-accent transition-all`}
                            >

                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MenuMobile
