
import Link from "next/link"

import { Linkedin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Github } from 'lucide-react';
import { Text } from 'lucide-react';

export function Contact() {
    return (
        <section id="contato" className="w-full mx-auto bg-[#03021a] ">
            <h1 className="text-center p-16 text-3xl font-medum font-orbitron text-gray-400">CONTATO</h1>



            <div className="flex flex-col justify-around items-center gap-10 px-6 max-w-screen-lg mx-auto">


                <div className="flex flex-col items-center text-center md:w-[60%]">
                    <h2 className="text-[20px] xl:text-[24px] font-semibold pb-2 text-gray-200">Obrigado por ter chegado até aqui!?</h2>
                    <span className="text-gray-600 xl:text-[20px]">Procuro uma oportunidade para demonstrar meu potencial, contribuir com soluções criativas e agregar resultados positivos para a empresa.</span>

                    <a href="https://wa.me/5579996931192?text=Olá,%20vim%20pelo%20portfólio!"
                        aria-label="Ligar para telefone">
                        <button className="flex flex-row items-center gap-2 bg-blue-900 text-white text-[20px] px-10 py-2 rounded-2xl font-semibold mt-6 transform transition duration-300 hover:scale-120">
                            <Text /> Enviar mensagem
                        </button>
                    </a>
                </div>


                <div className="flex w-full items-center justify-around">

                    <nav className=" flex gap-4 mb-6 p-6 text-[20px] font-semibold w-full items-center justify-around">
                        <a
                            className="flex flex-row gap-2 filter invert hover:underline"
                            href="https://www.linkedin.com/in/anderton-silva-165a32289/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Linkedin"><Linkedin /></a>

                        <a className="flex flex-row gap-2  filter invert hover:underline"
                            href="https://github.com/Anderton-Santos?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Github"><Github /></a>

                        <a className="flex flex-row gap-2  filter invert hover:underline"
                            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="email"><Mail /></a>

                        <a className="flex flex-row gap-2  filter invert hover:underline"
                            href="tel:+5579996931192"
                            aria-label="Ligar para telefone"><Phone /></a>
                    </nav>
                </div>
            </div>
        </section >
    )
}
