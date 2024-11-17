"use client";

import Image from "next/image";
import React from "react";
import Logo from "../_assets/Logo.svg";
import { londrinaSolid } from "../_lib/fonts";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (currentPath: string, pathname: string) => {
    if (currentPath.includes(pathname)) {
      return "underline";
    }
  };

  return (
    <nav
      className={`container flex justify-between py-8 ${londrinaSolid.className}`}
    >
      <Link href="/">
        <Image alt="Logo da Tattoo Shop" src={Logo} />
      </Link>
      <ul className="flex gap-6 text-3xl">
        <Link className={`${isActive(pathname, "servicos")}`} href="/servicos">
          Serviços
        </Link>
        <Link className={`${isActive(pathname, "sobre")}`} href="/sobre">
          Sobre Mim
        </Link>
        <Link href="/contato" className="text-right">
          <span className={`${isActive(pathname, "contato")}`}>
            Contato <br />
          </span>
          <span
            className={`text-xs text-zinc-400 font-extralight flex gap-1 items-center `}
          >
            <FaWhatsapp />+ 55(11) 99999-9999
          </span>
        </Link>
      </ul>
    </nav>
  );
}
