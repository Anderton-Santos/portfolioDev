
import Link from "next/link"

import { Linkedin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Github } from 'lucide-react';
import { Text } from 'lucide-react';

export function Contact() {
    return (
        <section id="contato" className="w-full mx-auto bg-gray-300">
            <h1 className="text-center p-16 text-3xl font-bold">CONTATO</h1>



            <div className="flex flex-col md:flex-row justify-around items-center gap-10 px-6 max-w-screen-lg mx-auto">


                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-2xl font-semibold pb-2">Gostou do meu trabalho?</h2>
                    <span className="text-gray-600">Mande uma mensagem e vamos trabalhar juntos!</span>

                    <a href="https://wa.me/5579996931192?text=Olá,%20vim%20pelo%20portfólio!"
                        aria-label="Ligar para telefone">
                        <button className="flex flex-row items-center gap-2 bg-blue-700 text-white text-[20px] px-10 py-2 rounded-2xl font-semibold mt-6 transform transition duration-300 hover:scale-120">
                            <Text /> Enviar mensagem
                        </button>
                    </a>
                </div>


                <div className="flex flex-col">
                    <span className="text-2xl font-semibold p-4">Outras formas de me encontrar:</span>

                    <nav className="flex flex-col gap-4 mb-6 p-6 text-[20px] font-semibold">
                        <a
                            className="flex flex-row gap-2 hover:underline"
                            href="https://www.linkedin.com/in/anderton-silva-165a32289/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Github"><Linkedin /> Linkedin</a>

                        <a className="flex flex-row gap-2 hover:underline"
                            href="https://github.com/Anderton-Santos?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Github"><Github /> Github</a>

                        <a className="flex flex-row gap-2 hover:underline"
                            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Github"><Mail /> E-mail: anderton4321@gmail.com</a>

                        <a className="flex flex-row gap-2 hover:underline"
                            href="tel:+5579996931192"
                            aria-label="Ligar para telefone"><Phone /> Telefone (79) 9 9693-1192</a>
                    </nav>
                </div>
            </div>
        </section >
    )
}
