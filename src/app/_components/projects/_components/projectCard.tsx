// components/ProjectCard.tsx
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  techs: { icon: StaticImageData; name: string }[];
  links: { label: string; url?: string }[];
}

export function ProjectCard({ title, description, image, techs, links }: ProjectCardProps) {
  return (



    <div className="w-screen md:w-full md:container relative">


      <section className="w-full flex">

        <Image
          className="rounded-3xl p-2 w-full h-[200px] md:w-[520px] md:h-[400px] xl:w-[870px] xl:h-[500px] opacity-40 hover:opacity-60 "
          src={image}
          alt={`Imagem do projeto ${title}`}
          priority
          quality={100}
        />


        <div className="absolute z-10 md:right-0 md:bottom-20 md:w-[60%] xl:right-0 bottom-0 xl:bottom-30 w-full xl:w-[50%]">
          <div className="flex flex-col bg-[#03021a]/60  md:bg-[#08053a] p-2 rounded-[8px]">
            <h2 className=" font-bold text-white text-[20px] mb-2 text-center w-full md:text-right md:w-[80%]">{title}</h2>
            <p className="text-gray-400 text-[12px] md:text-[15px] xl:text-[18px] font-medium p-1 text-center w-full md:w-[100%] xl:w-[80%] mx-auto font-orbitron">{description}</p> {/*Lembrara qi */}
            {/* <p className="p-4 font-semibold text-[19px] text-white">Tecnologias utilizadas:</p> */}
            <div className="w-[30%] xl:w-[36%] mx-auto xl:grid xl:grid-cols-2 xl:gap-4 flex items-center justify-center gap-2 ">
              {techs.map((tech, index) => (
                <div key={index} className="flex gap-1">
                  <Image
                    src={tech.icon}
                    width={26}
                    height={26}
                    alt={tech.name}
                    className="bg-gray-400 rounded-2xl hidden xl:flex"
                  />
                  <span className="text-gray-500 md:text-gray-600 font-semibold">{tech.name}</span>
                </div>
              ))}
            </div>

            <div className="p-4">
              {/* <p className="text-white text-[19px] font-semibold">Links para acesso:</p> */}
              <div className="flex gap-1 md:gap-4 flex-wrap justify-center ">
                {links.map((link, index) => (
                  link.url ? (
                    <Link
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-500 w-auto md:w-24 text-[12px] text-center rounded-2xl text-white font-semibold hover:bg-red-500 hover:scale-110 transition duration-300"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <span
                      key={index}
                      className="bg-gray-500 w-auto md:w-24 text-center rounded-2xl text-white font-bold opacity-60 cursor-not-allowed"
                    >
                      {link.label}
                    </span>
                  )
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>



    </div>

    // <Tilt
    //   tiltMaxAngleX={10}
    //   tiltMaxAngleY={15}
    //   glareEnable={true}
    //   glareMaxOpacity={0.3}
    //   scale={1.0}
    //   transitionSpeed={1000}
    //   className="p-4"
    // >

  );
}
