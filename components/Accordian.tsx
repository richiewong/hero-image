'use client';
import { useState } from "react";

type Props = {
  index: string;
  title: string;
  content: string;
}

export default function Accordian({ index, title, content }:Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className={`border-solid border-black border border-b-[6px] rounded-[40px] mb-4 p-6 bg-3 md:p-12 cursor-pointer dark:bg-2 ${isOpen && 'bg-[#B9FF66] dark:bg-[#B9FF66] dark:text-black'}`} onClick={toggle}>
      <div className="flex justify-between items-center">
        <div className="text-3xl font-medium md:text-5xl">{index}</div>
        <div className="text-lg font-medium px-4 md:text-2xl">{title}</div>
        <div className={`border border-black border-solid rounded-full w-8 h-8 min-w-8 min-h-8 inline-block flex items-center justify-center text-3xl font-medium dark:border-white ${isOpen && 'dark:border-black'}`}>
          {isOpen ? '-' : '+'}
        </div>
      </div>
      <div className={`${isOpen ? 'block dark:border-black' : 'hidden'} border-t border-black mt-8 pt-8 text-left dark:border-white`}>{content}</div>
    </div>
  );
}
