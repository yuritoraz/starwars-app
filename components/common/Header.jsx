"use client";

import Link from "next/link"
import Image from "next/image";

//components
import Nav from "./Nav";
import MenuMobile from "./MenuMobile";

const Header = () => {
  return(
    <header className="mx-auto flex py-8 xl:py-12 text-white">
    <div className="flex container justify-between items-center">
      {/*logo*/}
      <Link href="/">
        <h1 className="text-4xl">
          sw-database
        </h1>
      </Link>

      <Image 
      src="/assets/sw_logo.png"
      priority
      quality={100}
      width={400}
      height={400}
      alt="StarWars Logo"
      className="w-[200px] mr-28 hidden xl:block"
      />

      {/* desktop nav */}
      <div className="hidden xl:flex items-center gap-8">
        <Nav />
      </div>

    {/* mobile nav */}
    <div className="xl:hidden"><MenuMobile /></div>

    </div>
  </header>
  );
};

export default Header;