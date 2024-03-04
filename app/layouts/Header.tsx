import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.webp";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="md:h-[65px] md:leading-[65px]">
      <div className="container mx-auto px-3">
        <div className="flex justify-between items-center h-full">
          <div className="logo">
            <Link href="/" className="flex justify-start items-center gap-3">
              <Image src={logo} alt="logo" width={50} height={50} />
              <h1 className="text-md">Newsbutler</h1>
            </Link>
          </div>
          <div className="flex justify-end items-center h-full mr-2">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
