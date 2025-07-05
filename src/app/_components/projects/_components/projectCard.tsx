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
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={15}
      glareEnable={true}
      glareMaxOpacity={0.3}
      scale={1.0}
      transitionSpeed={1000}
      className="p-4"
    >
      <div className="bg-[rgba(18,18,19)] w-[350px] h-[600px] rounded-2xl flex flex-col justify-between">
        <div>
          <Image
            className="rounded-3xl p-2"
            src={image}
            alt={`Imagem do projeto ${title}`}
            priority
            quality={100}
          />
          <h2 className="text-center font-bold text-white text-[20px] mb-2">{title}</h2>
          <p className="text-gray-400 font-medium p-1 text-center">{description}</p>
          <p className="p-4 font-semibold text-[19px] text-white">Tecnologias utilizadas:</p>
          <div className="flex justify-center gap-4 flex-wrap px-4">
            {techs.map((tech, index) => (
              <div key={index} className="flex gap-1 bg-white w-fit px-1 rounded-2xl">
                <Image src={tech.icon} width={26} height={26} alt={tech.name} />
                <span className="text-black font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4">
          <p className="text-white text-[19px] font-semibold">Links para acesso:</p>
          <div className="flex gap-4 flex-wrap justify-center ">
            {links.map((link, index) => (
              link.url ? (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-500 w-24 text-center rounded-2xl text-white font-semibold hover:bg-red-500 hover:scale-110 transition duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <span
                  key={index}
                  className="bg-gray-500 w-24 text-center rounded-2xl text-white font-bold opacity-60 cursor-not-allowed"
                >
                  {link.label}
                </span>
              )
            ))}
          </div>
        </div>
      </div>
    </Tilt>
  );
}
