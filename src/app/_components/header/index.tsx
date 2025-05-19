"use client"

import '../../page.module.css'
import { Button } from "@/components/ui/button";

import { Switch } from "@/components/ui/switch"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Menu } from "lucide-react";
import { useState } from 'react';



export function Header() {

  const [mode, setMose] = useState(true)

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <header className="absolute top-0 w-full bg-red-500 py-6 px-4 z-[999]">
      <div className="max-w-[1280px] mx-auto flex md:flex-row items-center justify-between gap-6">
        <h1 className="text-3xl font-bold">
          AndertonSantos
          {/* <span className="hidden lg:inline text-white">.dev</span> */}
           <span className="lg:inline text-white">.dev</span>
          <span className="">&lt;/&gt;</span>
        </h1>

        {/* <div className="hidden lg:inline"><Switch checked={mode} onCheckedChange={setMose} /></div> */}
        <div className="hidden lg:hidden"><Switch checked={mode} onCheckedChange={setMose} /></div>

        <nav className="hidden  lg:flex flex-wrap justify-center gap-8 text-2xl font-bold">
          <button className='hover:text-white transition-colors duration-500' onClick={() => scrollToSection("")}>Home</button>
          <button className='hover:text-white transition-colors duration-500' onClick={() => scrollToSection("sobre")}>Sobre</button>
          <button className='hover:text-white transition-colors duration-500' onClick={() => scrollToSection("projetos")}>Projetos</button>
          <button className='hover:text-white transition-colors duration-500' onClick={() => scrollToSection("habilidades")}>Habilidades</button>
          <button className='hover:text-white transition-colors duration-500' onClick={() => scrollToSection("contato")}>Contato</button>
        </nav>

        {/* <div className='lg:hidden'><Switch checked={mode} onCheckedChange={setMose} /></div> */}
        <div className='hidden lg:hidden'><Switch checked={mode} onCheckedChange={setMose} /></div>


        <Sheet>
          {/* <SheetTrigger asChild className="lg:hidden"> */}
          <SheetTrigger asChild className=" hidden lg:hidden">
            <Button
              className=" hover:bg-gray-500/50 transition duration-150 "
              size="icon"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side='right' className='w-[240px] sm:w-[300px] z-[9999]'>
            <SheetTitle className='flex items-center justify-center p-8'>Menu</SheetTitle>

            <nav className='flex flex-col items-center justify-center gap-4 font-bold text-lg transition duration-150'>
              <button className=' hover:text-gray-600' onClick={() => scrollToSection("")}>Home</button>
              <button className=' hover:text-gray-600' onClick={() => scrollToSection("sobre")}>Sobre</button>
              <button className=' hover:text-gray-600' onClick={() => scrollToSection("projetos")}>Projetos</button>
              <button className=' hover:text-gray-600' onClick={() => scrollToSection("habilidades")}>Habilidades</button>
              <button className=' hover:text-gray-600' onClick={() => scrollToSection("contato")}>Contato</button>
            </nav>


          </SheetContent>
        </Sheet>


      </div>
    </header>
  );
}

