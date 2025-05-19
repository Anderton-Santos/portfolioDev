"use client"

import html from '../../../../public/html5.png'
import css from '../../../../public/css3.png'
import tailwind from '../../../../public/tailwindcss.png'
import sass from '../../../../public/sass.png'
import js from '../../../../public/javascript.png'
import ts from '../../../../public/typescript.png'
import react from '../../../../public/react.png'
import next from '../../../../public/nextdotjs.png'
import node from '../../../../public/nodedotjs.png'
import expres from '../../../../public/express.png'
import postgres from '../../../../public/postgresql.png'
import mongo from '../../../../public/mongodb.png'
import firebase from '../../../../public/firebase.png'
import github from '../../../../public/github.png'
import git from '../../../../public/git.png'

import { UserPlus, BicepsFlexed, Speech, ShieldUser } from 'lucide-react';




import Image from 'next/image'






export function Skills() {
    return (
        <section id='habilidades' className="container mx-auto  bg-blue-500 text-center p-8">
            <div>
                <h1 className='text-5xl font-bold'> Habilidades</h1>

            </div>

            <div className='p-16'>
                <span className='text-3xl font-semibold text-white'>Tecnologias Front-End</span>
                <div className="h-1 w-64 bg-white mt-2 rounded mx-auto" />
            </div>

            <section className='grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4 justify-items-center'>


                <div className='bg-white w-[200px] h-[280px] p-6 border-2 border-black rounded-2xl mb-8 xl:w-[280px] 
                transform transition duration-300 hover:scale-105'>

                    <Image
                        className='w-[50px] h-[50px] object-contain mx-auto xl:w-[80px] xl:h-[80px]'
                        src={html}
                        alt='Tecnologia html'
                    />

                    <h2 className='font-bold text-3xl mb-4'>HTML</h2>

                    <span className='font-semibold text-[18px]'>Linguagem de marcação usada para estruturar o conteúdo de páginas web.
                    </span>

                </div>

                <div className='bg-white w-[200px] h-[280px] p-2 border-2 border-black rounded-2xl xl:w-[280px]
                 transform transition duration-300 hover:scale-105'>
                
                    <Image
                        className='w-[50px] h-[80px] object-contain mx-auto xl:w-[80px] xl:h-[80px]'
                        src={css}
                        alt='Tecnologia html'
                    />

                    <h2 className='font-bold text-3xl mb-2'>CSS</h2>

                    <span className='font-semibold text-[15px] xl:text-[18px]'>Linguagem usada para estilizar elementos HTML, definindo cores, tamanhos, espaçamentos e layouts.

                    </span>

                </div>

                <div className='bg-white w-[200px] h-[280px] p-2 border-2 border-black rounded-2xl mb-8 xl:w-[280px] 
                transform transition duration-300 hover:scale-105'>
                    <Image
                        className='w-[50px] h-[50px] object-contain mx-auto xl:w-[80px] xl:h-[80px]'
                        src={js}
                        alt='Tecnologia html'
                    />

                    <h2 className='font-bold text-3xl mb-4'>JAVA SCRIPT</h2>

                    <span className='font-semibold text-[19px]'>Linguagem de programação usada para adicionar interatividade e dinamismo a páginas web.

                    </span>

                </div>

                <div className='bg-white w-[200px] h-[280px] p-2 border-2 border-black rounded-2xl xl:w-[280px]
                 transform transition duration-300 hover:scale-105'>
                    <Image
                        className='w-[50px] h-[50px] object-contain mx-auto xl:w-[80px] xl:h-[80px]'
                        src={ts}
                        alt='Tecnologia html'
                    />

                    <h2 className='font-bold text-3xl mb-4'>TYPE SCRIPT</h2>

                    <span className='font-semibold text-[18px]'>Superset do JavaScript que adiciona tipagem estática para tornar o código mais seguro e fácil de manter.

                    </span>

                </div>

                <div className='bg-white w-[200px] h-[280px] p-3 border-2 border-black rounded-2xl mb-8 xl:w-[280px]
                 transform transition duration-300 hover:scale-105'>
                    <Image
                        className='w-[50px] h-[50px] object-contain mx-auto xl:w-[80px] xl:h-[80px]'
                        src={react}
                        alt='Tecnologia html'
                    />

                    <h2 className='font-bold text-3xl mb-2'>REACT.js</h2>

                    <span className='font-semibold text-[17px] xl:text-[18px]'>Biblioteca JavaScript para construir interfaces de usuário de forma eficiente e reutilizável usando componentes.

                    </span>

                </div>

                <div className='bg-white w-[200px] h-[280px] p-3 border-2 border-black rounded-2xl xl:w-[280px] transform transition duration-300 hover:scale-105'>
                    <Image
                        className='w-[50px] h-[50px] object-contain mx-auto xl:w-[80px] xl:h-[80px]'
                        src={next}
                        alt='Tecnologia html'
                    />

                    <h2 className='font-bold text-3xl mb-4'>NEXT.js</h2>

                    <span className='font-semibold text-[17px] xl:text-[18px]'>Framework React com renderização server-side, geração estática e roteamento automático.

                    </span>

                </div>

                <div className='bg-white w-[200px] h-[280px] p-6 border-2 border-black rounded-2xl xl:w-[280px] transform transition duration-300 hover:scale-105'>
                    <Image
                        className='w-[50px] h-[50px] object-contain mx-auto xl:w-[80px] xl:h-[80px]'
                        src={tailwind}
                        alt='Tecnologia html'
                    />

                    <h2 className='font-bold text-2xl mb-4'>TAILWIND.css</h2>

                    <span className='font-semibold text-[18px]'>Framework CSS utilitário para estilizar rápido com classes prontas.

                    </span>

                </div>

                <div className='bg-white w-[200px] h-[280px] p-2 border-2 border-black rounded-2xl xl:w-[280px] transform transition duration-300 hover:scale-105'>
                    <Image
                        className='w-[50px] h-[50px] object-contain mx-auto xl:w-[80px] xl:h-[80px]'
                        src={sass}
                        alt='Tecnologia html'
                    />

                    <h2 className='font-bold text-3xl mb-1'>SASS</h2>

                    <span className='font-semibold text-[18px]'>Pré-processador CSS que permite usar variáveis, aninhamento e funções para facilitar a escrita de estilos.


                    </span>

                </div>

            </section>


            <div className='p-16'>
                <span className='text-3xl font-semibold text-white'>Tecnologias Back-End</span>
                <div className="h-1 w-64 bg-white mt-2 rounded mx-auto" />
            </div>

            <section className='grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4 justify-items-center'>

                <div className='bg-white w-[200px] h-[280px] p-2 border-2 border-black rounded-2xl mb-8 xl:w-[280px]
                 transform transition duration-300 hover:scale-105'>
                    <Image
                        className='w-[50px] h-[50px] object-contain mx-auto xl:w-[80px] xl:h-[80px]'
                        src={node}
                        alt='Tecnologia html'
                    />

                    <h2 className='font-bold text-3xl mb-6'>NODEjs</h2>

                    <span className='font-semibold text-[20px]'>Ambiente que permite rodar JavaScript no servidor.

                    </span>

                </div>

                <div className='bg-white w-[200px] h-[280px] p-2 border-2 border-black rounded-2xl xl:w-[280px]
                 transform transition duration-300 hover:scale-105'>
                    <Image
                        className='w-[50px] h-[50px] object-contain mx-auto xl:w-[80px] xl:h-[80px]'
                        src={expres}
                        alt='Tecnologia html'
                    />

                    <h2 className='font-bold text-3xl mb-4'>EXPRESS</h2>

                    <span className='font-semibold text-[18px]'>Framework Node.js para criar APIs e servidores de forma simples e rápida.


                    </span>

                </div>

                <div className='bg-white w-[200px] h-[280px] p-2 border-2 border-black rounded-2xl mb-8 xl:w-[280px]
                 transform transition duration-300 hover:scale-105'>
                    <Image
                        className='w-[50px] h-[50px] object-contain mx-auto xl:w-[80px] xl:h-[80px]'
                        src={postgres}
                        alt='Tecnologia html'
                    />

                    <h2 className='font-bold text-3xl mb-1'>postgresSQL</h2>

                    <span className='font-semibold text-[17px]'>Banco de dados relacional open-source, usado para armazenar e gerenciar dados com alta performance e segurança.


                    </span>

                </div>

                <div className='bg-white w-[200px] h-[280px] p-2 border-2 border-black rounded-2xl xl:w-[280px]
                 transform transition duration-300 hover:scale-105'>
                    <Image
                        className='w-[50px] h-[50px] object-contain mx-auto xl:w-[80px] xl:h-[80px]'
                        src={mongo}
                        alt='Tecnologia html'
                    />

                    <h2 className='font-bold text-3xl mb-4'>MONGOdb</h2>

                    <span className='font-semibold text-[18px]'>Banco de dados NoSQL orientado a documentos, ideal para dados flexíveis e escaláveis.


                    </span>

                </div>

                <div className='bg-white w-[200px] h-[280px] p-2 border-2 border-black rounded-2xl mb-8 xl:w-[280px]
                 transform transition duration-300 hover:scale-105'>
                    <Image
                        className='w-[50px] h-[50px] object-contain mx-auto xl:w-[80px] xl:h-[80px]'
                        src={firebase}
                        alt='Tecnologia html'
                    />

                    <h2 className='font-bold text-3xl mb-2'>FIREBASE</h2>

                    <span className='font-semibold text-[17px]'>Plataforma do Google que oferece backend pronto para apps, incluindo autenticação, banco de dados em tempo real e hospedagem.


                    </span>

                </div>

                <div className='bg-white w-[200px] h-[280px] p-2 border-2 border-black rounded-2xl xl:w-[280px]
                 transform transition duration-300 hover:scale-105'>
                    <Image
                        className='w-[50px] h-[50px] object-contain mx-auto xl:w-[80px] xl:h-[80px]'
                        src={github}
                        alt='Tecnologia html'
                    />

                    <h2 className='font-bold text-3xl mb-4'>GITHUB</h2>

                    <span className='font-semibold text-[18px]'>Plataforma online para hospedagem e controle de versões de código usando Git.


                    </span>

                </div>

                <div className='bg-white w-[200px] h-[280px] p-2 border-2 border-black rounded-2xl xl:w-[280px]
                 transform transition duration-300 hover:scale-105'>
                    <Image
                        className='w-[50px] h-[50px] object-contain mx-auto xl:w-[80px] xl:h-[80px]'
                        src={git}
                        alt='Tecnologia html'
                    />

                    <h2 className='font-bold text-3xl mb-1'>GIT</h2>

                    <span className='font-semibold text-[18px]'>Sistema de controle de versão distribuído para gerenciar e registrar mudanças em projetos de software.


                    </span>

                </div>


            </section>

            <div className='p-16'>
                <span className='text-3xl font-bold'>Habilidades coorporativas</span>
                <div className="h-1 w-64 bg-white mt-2 rounded mx-auto" />
            </div>

            <section className='grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4  justify-items-center'>

                <div className='bg-white w-[200px] h-[280px] p-2 border-2 border-black rounded-2xl xl:w-[280px]
                 transform transition duration-300 hover:scale-105'>

                    <UserPlus className='w-[130px] h-[90px] mx-auto' />

                    <h2 className='font-bold text-2xl mb-4'>FLEXIBILIDADE</h2>

                    <span className='font-semibold text-[17px]'>Capacidade de se adaptar a diferentes funções, equipes e desafios no ambiente de trabalho.</span>

                </div>

                <div className='bg-white w-[200px] h-[280px] p-2 border-2 border-black rounded-2xl xl:w-[280px] transform transition duration-300 hover:scale-105'>

                    <BicepsFlexed className='w-[100px] h-[80px] mx-auto' />

                    <h2 className='font-bold text-2xl mb-6'>TRABALHO EM EQUIPE</h2>

                    <span className='font-semibold text-[18px]'>Colaboração eficaz com colegas para alcançar objetivos em comum.</span>

                </div>

                <div className='bg-white w-[200px] h-[280px] p-2 border-2 border-black rounded-2xl xl:w-[280px] transform transition duration-300 hover:scale-105'>

                    <ShieldUser className='w-[100px] h-[80px] mx-auto' />

                    <h2 className='font-bold text-2xl mb-6'>COMPROMISSO</h2>

                    <span className='font-semibold text-[19px]'>Dedicação e responsabilidade para cumprir tarefas e prazos com excelência.</span>

                </div>

                <div className='bg-white w-[200px] h-[280px] p-2 border-2 border-black rounded-2xl xl:w-[280px] transform transition duration-300 hover:scale-105'>

                    <Speech className='w-[100px] h-[80px] mx-auto' />

                    <h2 className='font-bold text-2xl mb-6'>COMUNICAÇÃO</h2>

                    <span className='font-semibold text-[20px]'>Habilidade de transmitir ideias com clareza e ouvir ativamente.
                    </span>

                </div>






            </section>


        </section>
    )
}