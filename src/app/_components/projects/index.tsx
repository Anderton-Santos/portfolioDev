"use client";

import { use } from 'react'
import { OrderContext } from '@/providers/modal';


import projetoApi from '../../../../public/pededeli.png'
import cilio from '../../../../public/Cilio.png'
import pededeli from '../../../../public/pededeliweb.png'
import closeDely from '../../../../public/closedely.png'
import chamados from '../../../../public/controle.png'



import node from '../../../../public/nodedotjs.png'
import express from '../../../../public/express.png'
import ts from '../../../../public/typescript.png'
import react from '../../../../public/react.png'
import next from '../../../../public/nextdotjs.png'
import post from '../../../../public/postgresql.png'
import firebase from '../../../../public/firebase.png'
import sass from '../../../../public/sass.png'
import tailwind from '../../../../public/tailwindcss.png'

import Image from "next/image";

import Tilt from 'react-parallax-tilt'
import Link from 'next/link';
export function Projects() {
    const { isOpen, onRequestOpen } = use(OrderContext)

    function handleDetailOrder() {
        onRequestOpen()
    }


    return (
        <>
            <section id='projetos' className='bg-blue-950 p-12' >
                <h1 className="text-4xl font-bold mb-6 p-8 text-center text-white">Projetos</h1>


                <div className=" grid grid-cols-1 gap-14 place-items-center md:grid-cols-1 md:gap-4 lg:grid-cols-2 xl:grid-cols-3">


                    <Tilt
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={15}
                        glareEnable={true}
                        glareMaxOpacity={0.3}
                        scale={1.00}
                        transitionSpeed={1000}
                        className="p-4"
                    >
                        <div className="bg-[rgba(18,18,19)] w-[410px] h-[650px] rounded-2xl">
                            <Image
                                className="rounded-3xl p-2"
                                src={projetoApi}
                                alt="Mockup devPizzaria API"
                                priority={true}
                                quality={100}

                            />

                            <h1 className="text-center font-bold text-white text-3xl mb-2">PedeDeli - API</h1>
                            <div className='text-white font-semibold p-2 text-center mb-4'>
                                <span >API desenvolvida para dashboard(admin) PedeDeli, a qual fornece toda a estrutura necessária para o cadastro e categorias dos produtos
                                    para serem exibidos na loja.
                                </span>
                            </div>

                            <span className="p-4 font-semibold text-2xl text-white">Tecnologias utilizadas:</span>

                            <div className="flex justify-center mt-8 gap-4 flex-wrap">
                                <div className="flex gap-2 bg-white w-fit px-2 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={node}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">NodeJs</span>
                                </div>

                                <div className="flex gap-2 bg-white w-fit px-3 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={express}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">Express</span>
                                </div>

                                <div className="flex gap-2 bg-white w-fit px-3 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={ts}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">TypeScript</span>
                                </div>

                                <div className="flex gap-2 bg-white w-fit px-3 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={post}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">PostGresQl</span>
                                </div>

                            </div>

                            <div className='p-6 mt-2'>
                                <span className='text-white text-2xl font-semibold'>Links para acesso:</span>

                                <div className='flex gap-8 items-center justify-around p-6 text-[18px] font-bold text-white'>
                                    <Link
                                        href="https://github.com/Anderton-Santos/PedeDeli-API"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <span className='bg-gray-500 w-24 p-1 text-center rounded-2xl transition duration-400 hover:bg-red-500 hover:scale-110'>GitHub</span>
                                    </Link>

                                    <Link
                                        href="https://www.linkedin.com/posts/anderton-silva-165a32289_nodejs-typescript-express-activity-7337169248298897408-0Xlg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYZCV0B5A57KJN7bXF9CdH8xl5KtEtUavQ"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <span className='bg-gray-500 w-24 p-1 text-center rounded-2xl transition duration-400 hover:bg-red-500 hover:scale-110'>Linkedin</span>
                                    </Link>

                                </div>
                            </div>



                        </div>
                    </Tilt>


                    <Tilt
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={15}
                        glareEnable={true}
                        glareMaxOpacity={0.3}
                        scale={1.00}
                        transitionSpeed={1000}
                        className="p-4"
                    >
                        <div className="bg-[rgba(18,18,19)] w-[400px] h-[650px] rounded-2xl">
                            <Image
                                className="rounded-3xl p-2"
                                src={pededeli}
                                alt="Pagina cadastro de produto do Sass"
                                priority={true}
                                quality={100}

                            />

                            <h1 className="text-center font-bold text-white text-3xl mb-2">PedeDeli - Web</h1>

                            <div className='text-white font-semibold p-2 text-center mb-4'>
                                <span >Painel administrativo completo que permite ao lojista cadastrar produtos, organizar por categorias e gerenciar pedidos.
                                    No site, os clientes visualizam os produtos em tempo real, adicionam itens ao carrinho e finalizam seus pedidos com praticidade.
                                </span>
                            </div>
                            <span className="p-4 font-semibold text-2xl text-white">Tecnologias utilizadas:</span>

                            <div className="flex justify-center mt-2 gap-4 flex-wrap">
                                <div className="flex gap-2 bg-white w-fit px-2 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={ts}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">TypeScript</span>
                                </div>

                                <div className="flex gap-2 bg-white w-fit px-3 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={react}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">React</span>
                                </div>

                                <div className="flex gap-2 bg-white w-fit px-3 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={next}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">Next</span>
                                </div>
                                <div className="flex gap-2 bg-white w-fit px-3 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={post}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">PostGresQl</span>
                                </div>

                                <div className="flex gap-2 bg-white w-fit px-3 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={sass}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">Sass</span>
                                </div>
                            </div>

                            <div className='p-4 mt-2'>
                                <span className='text-white text-2xl font-semibold'>Links para acesso:</span>

                                <div className='flex gap-4 items-center justify-around p-6 text-[18px] font-bold text-white'>
                                    <Link
                                        href="https://github.com/Anderton-Santos/PedeDeli-Front"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <span className='bg-gray-500 w-24 p-1 text-center rounded-2xl transition duration-400 hover:bg-red-500 hover:scale-110'>GitHub</span>
                                    </Link>
                                    <Link
                                        href="https://www.linkedin.com/posts/anderton-silva-165a32289_nextjs-typescript-tailwindcss-activity-7337173373094891520-diLF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYZCV0B5A57KJN7bXF9CdH8xl5KtEtUavQ"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <span className='bg-gray-500 w-24 p-1 text-center rounded-2xl transition duration-400 hover:bg-red-500 hover:scale-110'>Linkedin</span>
                                    </Link>

                                    <Link
                                        href="https://www.linkedin.com/posts/anderton-silva-165a32289_nextjs-typescript-tailwindcss-activity-7337173373094891520-diLF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYZCV0B5A57KJN7bXF9CdH8xl5KtEtUavQ"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <span className='bg-gray-500 w-24 p-1 text-center rounded-2xl transition duration-400 hover:bg-red-500 hover:scale-110'>Youtube</span>
                                    </Link>

                                    <Link
                                        href="https://pede-deli-front-git-main-anderton-santos-projects.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <span className='bg-gray-500 w-28 px-3 py-1 text-center rounded-2xl transition duration-400 hover:bg-red-500 hover:scale-110'>Site</span>
                                    </Link>


                                </div>
                            </div>

                        </div>
                    </Tilt>


                    <Tilt
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={15}
                        glareEnable={true}
                        glareMaxOpacity={0.3}
                        scale={1.00}
                        transitionSpeed={1000}
                        className="p-4"
                    >
                        <div className="bg-[rgba(18,18,19)] w-[400px] h-[650px] rounded-2xl">
                            <Image
                                className="rounded-3xl p-2"
                                src={cilio}
                                alt="Mockup devPizzaria API"
                                priority={true}
                                quality={100}

                            />
                            <h1 className="text-center font-bold text-white text-3xl mb-2">Cílios da Maria</h1>
                            <div className='text-white font-semibold p-2 text-center mb-4'>
                                <span >Site institucional com apresentação da profissional, tabelas de preços organizadas por serviço e rotas com links diretos para contato.
                                </span>
                            </div>
                            <span className="p-6 font-semibold text-2xl text-white">Tecnologias utilizadas:</span>

                            <div className="flex justify-center mt-8 gap-4 flex-wrap">
                                <div className="flex gap-2 bg-white w-fit px-2 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={ts}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">TypeScript</span>
                                </div>

                                <div className="flex gap-2 bg-white w-fit px-3 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={react}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">React</span>
                                </div>

                                <div className="flex gap-2 bg-white w-fit px-3 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={tailwind}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">Tailwind</span>
                                </div>


                            </div>

                            <div className='p-6 mt-2'>
                                <span className='text-white text-2xl font-semibold'>Links para acesso:</span>

                                <div className='flex gap-8 items-center justify-around p-6 text-[18px] font-bold text-white'>
                                    <span className='bg-gray-500 w-24 p-1 text-center rounded-2xl transition duration-400 hover:bg-red-500 hover:scale-110 cursor-pointer'>GitHub</span>
                                    <span className='bg-gray-500 w-24 p-1 text-center rounded-2xl transition duration-400 hover:bg-red-500 hover:scale-110 cursor-pointer'>Linkedin</span>
                                    <span className='bg-gray-500 w-24 p-1 text-center rounded-2xl transition duration-400 hover:bg-red-500 hover:scale-110 cursor-pointer'>Site</span>
                                </div>
                            </div>


                        </div>
                    </Tilt>


                    <Tilt
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={15}
                        glareEnable={true}
                        glareMaxOpacity={0.3}
                        scale={1.00}
                        transitionSpeed={1000}
                        className="p-4"
                    >
                        <div className="bg-[rgba(18,18,19)] w-[400px] h-[650px] rounded-2xl">
                            <Image
                                className="rounded-3xl p-2"
                                src={closeDely}
                                alt="Mockup devPizzaria API"
                                priority={true}
                                quality={100}

                            />
                            <h1 className="text-center font-bold text-white text-2xl mb-2">CloseDely - Gestão de pedidos</h1>
                            <div className='text-white font-semibold p-2 text-center mb-2'>
                                <span >Sistema de registro de pedidos externos (WhatsApp e apps de delivery), permitindo melhor
                                    organização com cálculos separados por forma de pagamento e plataforma, gerando relatórios
                                    claros para supervisão no fim do dia.

                                </span>
                            </div>
                            <span className="p-6 font-semibold text-2xl text-white">Tecnologias utilizadas:</span>

                            <div className="flex justify-center mt-6 gap-4 flex-wrap">
                                <div className="flex gap-2 bg-white w-fit px-2 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={ts}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">TypeScript</span>
                                </div>

                                <div className="flex gap-2 bg-white w-fit px-3 rounded-2xl flex-wrap">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={react}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">React</span>
                                </div>

                                <div className="flex gap-2 bg-white w-fit px-3 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={firebase}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">Firebase</span>
                                </div>

                                <div className="flex gap-2 bg-white w-fit px-3 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={tailwind}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">Tailwind</span>
                                </div>


                            </div>

                            <div className='p-6 '>
                                <span className='text-white text-2xl font-semibold'>Links para acesso:</span>

                                <div className='flex gap-8 items-center justify-around p-6 text-[18px] font-bold text-white'>
                                    <span className='bg-gray-500 w-24 p-1 text-center rounded-2xl transition duration-400 hover:bg-red-500 hover:scale-110 cursor-pointer'>GitHub</span>
                                    <span className='bg-gray-500 w-24 p-1 text-center rounded-2xl transition duration-400 hover:bg-red-500 hover:scale-110 cursor-pointer'>Youtube</span>
                                </div>
                            </div>


                        </div>
                    </Tilt>


                    <Tilt
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={15}
                        glareEnable={true}
                        glareMaxOpacity={0.3}
                        scale={1.00}
                        transitionSpeed={1000}
                        className="p-4"
                    >
                        <div className="bg-[rgba(18,18,19)] w-[400px] h-[650px] rounded-2xl">
                            <Image
                                className="rounded-3xl p-2"
                                src={chamados}
                                alt="Mockup devPizzaria API"
                                priority={true}
                                quality={100}

                            />
                            <h1 className="text-center font-bold text-white text-2xl mb-2">DevControle - Controles de chamados</h1>
                            <div className='text-white font-semibold p-2 text-center mb-2'>
                                <span >Sistema de controle de chamados que permite visualizar solicitações em andamento e cadastrar clientes para melhor gestão do atendimento.
                                </span>
                            </div>
                            <span className="p-6 font-semibold text-2xl text-white">Tecnologias utilizadas:</span>

                            <div className="flex justify-center mt-6 gap-4 flex-wrap">
                                <div className="flex gap-2 bg-white w-fit px-2 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={ts}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">TypeScript</span>
                                </div>

                                <div className="flex gap-2 bg-white w-fit px-3 rounded-2xl flex-wrap">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={react}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">React</span>
                                </div>

                                <div className="flex gap-2 bg-white w-fit px-3 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={next}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">Next</span>
                                </div>

                                <div className="flex gap-2 bg-white w-fit px-3 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={firebase}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">Firebase</span>
                                </div>

                                <div className="flex gap-2 bg-white w-fit px-3 rounded-2xl">
                                    <Image
                                        width={30}
                                        height={30}
                                        src={tailwind}
                                        alt="node"
                                        objectFit="contain"
                                    />
                                    <span className="text-black font-semibold w-auto">Tailwind</span>
                                </div>


                            </div>

                            <div className='p-6 mt-1'>
                                <span className='text-white text-2xl font-semibold'>Links para acesso:</span>

                                <div className='flex gap-8 items-center justify-around p-6 text-[18px] font-bold text-white'>
                                    <span className='bg-gray-500 w-24 p-1 text-center rounded-2xl transition duration-400 hover:bg-red-500 hover:scale-110 cursor-pointer'>GitHub</span>
                                    <span className='bg-gray-500 w-24 p-1 text-center rounded-2xl transition duration-400 hover:bg-red-500 hover:scale-110 cursor-pointer'>Linkedin</span>
                                </div>
                            </div>



                        </div>
                    </Tilt>

                </div>


            </section>


        </>
    )
}


