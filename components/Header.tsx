'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header>
      <div className="p-4 flex justify-between items-center h-16 md:p-0 md:mb-16">
        <div className="flex justify-center items-center">
          <Image src='/images/logo-black.png' alt="arrow" width={60} height={61} className="w-6 mr-1.5"></Image>
          <div className="text-2xl">Positivus</div>
        </div>
        <div className="hidden md:block">
          <Link href='/' className="mb-2 hover:bg-[#B9FF66] cursor-pointer mr-4">About us</Link>
          <Link href='/' className="mb-2 hover:bg-[#B9FF66] cursor-pointer mr-4">Services</Link>
          <Link href='/' className="mb-2 hover:bg-[#B9FF66] cursor-pointer mr-4">Use Cases</Link>
          <Link href='/' className="mb-2 hover:bg-[#B9FF66] cursor-pointer mr-4">Pricing</Link>
          <Link href='/' className="mb-4 hover:bg-[#B9FF66] cursor-pointer mr-4">Blog</Link>
          <Link href='/' className="border border-solid border-black rounded-2xl p-4 hover:bg-[#B9FF66] cursor-pointer">Request a quote</Link>
        </div>
        <Image src='/images/menu.png' alt="arrow" width={52} height={37} className="w-6 md:hidden" onClick={toggleMenu}></Image>
      </div>
      {
        isMenuOpen &&
        <div className="fixed top-0 left-0 right-0 bottom-0 z-10 flex flex-col transition-all duration-300 ease-in-out md:hidden">
          <div className="bg-white opacity-100 z-20">
            <div className="p-4 flex justify-between items-center h-16">
              <div className="flex justify-center items-center">
                <Image src='/images/logo-black.png' alt="arrow" width={60} height={61} className="w-6 mr-1.5"></Image>
                <div className="text-2xl">Positivus</div>
              </div>
              <div className="text-4xl" onClick={toggleMenu}>×</div>
            </div>
            <div className="p-4">
              <Link href='/' className="block mb-2 hover:bg-[#B9FF66] cursor-pointer">About us</Link>
              <Link href='/' className="block mb-2 hover:bg-[#B9FF66] cursor-pointer">Services</Link>
              <Link href='/' className="block mb-2 hover:bg-[#B9FF66] cursor-pointer">Use Cases</Link>
              <Link href='/' className="block mb-2 hover:bg-[#B9FF66] cursor-pointer">Pricing</Link>
              <Link href='/' className="block mb-4 hover:bg-[#B9FF66] cursor-pointer">Blog</Link>
              <Link href='/' className="block border border-solid border-black rounded-2xl p-4 hover:bg-[#B9FF66] cursor-pointer">Request a quote</Link>
            </div>
          </div>
          <div className="flex-1 bg-[#191A23] opacity-80" onClick={toggleMenu}></div>
        </div>
      }
    </header>
  );
}
