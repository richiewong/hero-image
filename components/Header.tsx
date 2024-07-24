'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header>
      <div className="p-4 flex justify-between items-center h-16 fixed top-0 left-0 right-0 z-10 bg-white dark:bg-black md:p-0 md:mb-16 md:static">
        <div className="flex justify-center items-center">
          <Image src='/images/logo-black.png' alt="arrow" width={60} height={61} className="w-6 mr-1.5 dark:invert"></Image>
          <div className="text-2xl">Positivus</div>
        </div>
        <nav className={`absolute top-16 left-0 right-0 flex flex-col p-4 backdrop-blur-sm bg-white/80 dark:bg-black/80 shadow-2xl transition-all ease-in-out duration-300 ${isMenuOpen ? 'visible opacity-100 h-auto' : 'invisible opacity-0 h-0'} md:h-fit md:block md:static md:visible md:opacity-100 md:shadow-none`}>
          <Link href='/' className="mb-2 hover:bg-[#B9FF66] cursor-pointer mr-4 dark:hover:text-black">About us</Link>
          <Link href='/' className="mb-2 hover:bg-[#B9FF66] cursor-pointer mr-4 dark:hover:text-black">Services</Link>
          <Link href='/' className="mb-2 hover:bg-[#B9FF66] cursor-pointer mr-4 dark:hover:text-black">Use Cases</Link>
          <Link href='/' className="mb-2 hover:bg-[#B9FF66] cursor-pointer mr-4 dark:hover:text-black">Pricing</Link>
          <Link href='/' className="mb-4 hover:bg-[#B9FF66] cursor-pointer mr-4 dark:hover:text-black">Blog</Link>
          <Link href='/' className="border border-solid border-black rounded-2xl p-4 hover:bg-[#B9FF66] cursor-pointer dark:border-white dark:hover:text-black dark:hover:border-black">Request a quote</Link>
        </nav>
        <div onClick={toggleMenu} className="md:hidden cursor-pointer select-none">
          {
            isMenuOpen
              ? <div className="text-4xl">×</div>
              : <Image src='/images/menu.png' alt="arrow" width={52} height={37} className="w-6 md:hidden dark:invert"></Image>
          }
        </div>
      </div>
    </header>
  );
}
