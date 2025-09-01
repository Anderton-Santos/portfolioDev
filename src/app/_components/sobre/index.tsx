"use client"

import anderDev from '../../../../public/anderDevv.png'
import Image from "next/image";

import { motion } from 'framer-motion'


export function Sobre() {
    return (
        <div className="w-full  bg-[#03021a]">
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}  // anima apenas na primeira vez
                id="sobre" className="container flex items-center justify-center mx-auto text-center bg-[#03021a]">


                <div className="max-w-4xl p-14 mx-auto text-[16px] md:text-[19px] text-center md:text-justify font-semibold text-gray-400 mt-10">
                    <div>
                        <h1 className="text-3xl font-bold text-left text-white font-orbitron">Sobre mim</h1>
                        <div className="h-1 w-64 bg-white rounded mx-auto mb-4" />
                    </div>

                    <p className="mb-6">
                        Desenvolvedor web com experiência em front-end e back-end, trabalhando com tecnologias como JavaScript, React, Next.js, Node.js, Express e MongoDB. Tenho paixão por aprender profundamente novas tecnologias e explorar ferramentas que me permitam criar soluções cada vez mais eficientes, escaláveis e inovadoras.
                    </p>

                    <p className="mb-6">
                        Ao longo da minha trajetória, desenvolvi foco em boas práticas de desenvolvimento, performance, usabilidade e qualidade de código, buscando entregar projetos que agreguem valor real. Estou sempre em busca de desafios que me permitam expandir meus conhecimentos e contribuir de forma significativa, seja de maneira individual ou colaborando em equipe.
                    </p>

                    <p className="mb-10">
                        Sou apaixonado pela área de desenvolvimento e tenho um desejo constante de capacitação e aprendizado, sempre em busca de me tornar um profissional mais completo, pronto para enfrentar novos desafios e acompanhar a evolução tecnológica do setor.
                    </p>
                </div>

                <div className="hidden xl:flex xl:items-center xl:justify-center xl:w-full ">
                    <Image
                        className="rounded-full "
                        src={anderDev}
                        alt="Imagem de apresentação"
                        width={300}
                        height={200}
                        priority={true}
                    />
                </div>
            </motion.section>
        </div>

    );
}
