"use client"

import { TechLogosMarquee } from "./_components/animation";

import { motion } from 'framer-motion'


export function Hero() {
  return (
    <section id="inicio" className="md:w-full mx-0">

      <div className="relative overflow-hidden mx-auto pt-20" >
        <TechLogosMarquee />
      </div>

      <div

        className="flex flex-col md:items-center justify-center lg:items-center xl:items-start xl:ml-[15%]">
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-40 w-full md:w-[80%] lg:w-[60%] xl:w-[40%] p-8 z-[999] flex flex-col items-start md:items-center text-start">
          <h1 className="text-1xl lg:text-3xl text-white font-medium font-orbitron">Quem sou eu?</h1>
          <h1 className="text-7xl lg:text-9xl text-blue-200 font-bold">Anderton</h1>
          <span className="text-3xl font-medium text-gray-400">Desenvolvedor Web</span>

          <motion.span
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="hidden lg:inline text-3xl lg:w-[100%] lg:text-center xl:text-start font-medium text-white mt-10 max-w-x ">
            Meu principal objetivo é trazer soluções práticas e eficazes para resolver os seus problemas.
          </motion.span>

          <div className="hidden lg:flex flex-col items-center justify-center gap-6 mt-14">
            <span className="text-2xl text-white font-semibold">Confira meu Curriculo:</span>
            <motion.a
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              href="https://drive.google.com/file/d/1XoynqZRW_G-lQs-Z7vrgoLVXsknPiQTd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-4 text-gray-400 font-medium rounded-[8px] font-orbitron border border-amber-500 hover:text-gray-200 transition"
            >
              VER CURRÍCULO
            </motion.a>
          </div>



        </motion.section>


      </div>

      <div className=" absolute top-90 p-8 z-[999] flex flex-col items-center justify-center lg:top-20">
        <motion.span
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="text-[19px] text-gray-400 md:text-2xl md:w-[70%] font-medium text-center mx-auto w-full lg:hidden mb-5">
          Meu principal objetivo é trazer soluções práticas e eficazes para resolver os seus problemas.
        </motion.span>

        <div className="flex flex-col items-center justify-center gap-6 mt-12 lg:hidden">

          <motion.a
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            href="https://drive.google.com/file/d/1XoynqZRW_G-lQs-Z7vrgoLVXsknPiQTd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-4 text-gray-400 font-medium rounded-[8px] font-orbitron border border-amber-500 hover:text-gray-200 transition"
          >
            VER CURRÍCULO
          </motion.a>
          {/* </button> */}
        </div>
      </div>



    </section>
  );
}

