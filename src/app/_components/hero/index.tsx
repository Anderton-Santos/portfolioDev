import { TechLogosMarquee } from "./_components/animation";
import anderDev from '../../../../public/anderDevv.png'
import Image from "next/image";


export function Hero() {
  return (
    <section id="inicio" className="w-full mx-0">

      <div className="relative overflow-hidden mx-auto pt-20" >
        <TechLogosMarquee />
      </div>

      <div className="flex flex-col items-center justify-center lg:items-start lg:ml-[10%]">
        <section className="absolute top-20 p-8 z-[999] flex flex-col items-center text-center">
          <h1 className="text-2xl lg:text-5xl text-white font-semibold">Quem sou eu?</h1>
          <h1 className="text-7xl lg:text-9xl text-white font-bold">Anderton</h1>
          <span className="text-3xl lg:text-4xl text-white font-medium">Desenvolvedor Web</span>

          <span className="hidden lg:inline text-3xl font-bold text-white mt-10 max-w-xl">
            Meu principal objetivo é trazer soluções práticas e eficazes para resolver os seus problemas.
          </span>

          <div className="hidden lg:flex flex-col items-center justify-center gap-6 mt-14">
            <span className="text-2xl text-white font-semibold">Confira meu Curriculo:</span>
            <a
              href="https://drive.google.com/file/d/11ka7P2nGNdyStHiuHqmNtXxY8Z26lqxr/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-amber-300 text-gray-700 font-extrabold rounded-xl hover:bg-amber-400 transition"
            >
              VER CURRÍCULO
            </a>
          </div>



        </section>


        <div className="absolute top-60 right-1/2 translate-x-1/2 lg:top-30 lg:right-[10%] lg:translate-x-0 p-8 mb-6 ">
          <Image
            className="rounded-full"
            src={anderDev}
            alt="Imagem de apresentação"
            width={200}
            height={200}
            priority={true}
          />
        </div>

      </div>

      <div className=" absolute top-120 p-8 z-[999] flex flex-col items-center justify-center lg:top-20">
        <span className="text-2xl font-bold text-white text-center mx-auto lg:hidden">
          Meu principal objetivo é trazer soluções práticas e eficazes para resolver os seus problemas.
        </span>

        <div className="flex flex-col items-center justify-center gap-6 mt-6 lg:hidden">
          <span className="text-2xl text-white font-semibold">Confira meu Curriculo:</span>
          {/* <button className="w-[200px] h-[40px] bg-amber-300 text-gray-700 font-extrabold rounded-xl"> */}
            <a 
              href="https://drive.google.com/file/d/1Q2HY2AVyPVOtmuIq6fUEOuxUIOKkeUqK/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-amber-300 text-gray-700 font-extrabold rounded-xl hover:bg-amber-400 transition"
            >
              VER CURRÍCULO
            </a>
          {/* </button> */}
        </div>
      </div>



    </section>
  );
}

