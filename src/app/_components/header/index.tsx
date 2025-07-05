"use client"

import { useState } from 'react';
import { Hamburger, X } from 'lucide-react';

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsSidebarOpen(false); // fecha a sidebar ao clicar
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-blue-900 py-6 px-4 z-[999] shadow-md">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <h1 className="font-bold text-gray-400 text-2xl md:text-3xl">
            AndertonSantos<span className="text-white">.dev</span><span>&lt;/&gt;</span>
          </h1>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Abrir menu"
          >
            <Hamburger size={30} />
          </button>

          <nav className="hidden lg:flex gap-8 text-[18px] font-bold">
            <button className="text-white underline hover:text-white" onClick={() => scrollToSection("")}>Home</button>
            <button className="text-gray-400 hover:text-white" onClick={() => scrollToSection("sobre")}>Sobre</button>
            <button className="text-gray-400 hover:text-white" onClick={() => scrollToSection("projetos")}>Projetos</button>
            <button className="text-gray-400 hover:text-white" onClick={() => scrollToSection("habilidades")}>Habilidades</button>
            <button className="text-gray-400 hover:text-white" onClick={() => scrollToSection("contato")}>Contato</button>
          </nav>
        </div>
      </header>

      {/* Sidebar Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-950 shadow-xl z-[1000] transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white">
          <h2 className="text-white font-bold text-xl">Menu</h2>
          <button onClick={() => setIsSidebarOpen(false)} aria-label="Fechar menu">
            <X size={28} color="#FFF" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 p-6 text-white font-bold text-lg">
          <button onClick={() => scrollToSection("")}>Home</button>
          <button onClick={() => scrollToSection("sobre")}>Sobre</button>
          <button onClick={() => scrollToSection("projetos")}>Projetos</button>
          <button onClick={() => scrollToSection("habilidades")}>Habilidades</button>
          <button onClick={() => scrollToSection("contato")}>Contato</button>
        </nav>
      </div>

      {/* Overlay quando a sidebar estiver aberta */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999]"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}
