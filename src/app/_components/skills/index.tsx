"use client";

import Image from "next/image";
import { UserPlus, BicepsFlexed, Speech, ShieldUser } from "lucide-react";
import html from "../../../../public/html5.png";
import css from "../../../../public/css3.png";
import js from "../../../../public/javascript.png";
import ts from "../../../../public/typescript.png";
import react from "../../../../public/react.png";
import next from "../../../../public/nextdotjs.png";
import tailwind from "../../../../public/tailwindcss.png";
import sass from "../../../../public/sass.png";
import node from "../../../../public/nodedotjs.png";
import express from "../../../../public/express.png";
import postgres from "../../../../public/postgresql.png";
import mongo from "../../../../public/mongodb.png";
import firebase from "../../../../public/firebase.png";
import github from "../../../../public/github.png";

interface SkillItem {
  src: any;
  title: string;
  description: string;
}

interface SoftSkillItem {
  icon: any;
  title: string;
  description: string;
}

const frontSkills: SkillItem[] = [
  { src: html, title: "HTML", description: "Linguagem de marcação para estruturar o conteúdo de páginas web." },
  { src: css, title: "CSS", description: "Linguagem usada para estilizar elementos HTML." },
  { src: js, title: "JavaScript", description: "Adiciona interatividade e dinamismo às páginas web." },
  { src: ts, title: "TypeScript", description: "Superset do JS com tipagem estática." },
  { src: react, title: "React.js", description: "Biblioteca para construir interfaces reutilizáveis." },
  { src: next, title: "Next.js", description: "Framework com renderização SSR e roteamento automático." },
  { src: tailwind, title: "Tailwind CSS", description: "Framework utilitário para estilização rápida." },
  { src: sass, title: "SASS", description: "Pré-processador CSS com variáveis e aninhamento." }
];

const backSkills: SkillItem[] = [
  { src: node, title: "Node.js", description: "Permite rodar JavaScript no servidor." },
  { src: express, title: "Express", description: "Framework para criar APIs com Node.js." },
  { src: postgres, title: "PostgreSQL", description: "Banco relacional open-source com alta performance." },
  { src: mongo, title: "MongoDB", description: "Banco NoSQL orientado a documentos." },
  { src: firebase, title: "Firebase", description: "Backend do Google com autenticação e banco em tempo real." },
  { src: github, title: "GitHub", description: "Hospedagem e versionamento de código." },
];

const softSkills: SoftSkillItem[] = [
  { icon: <UserPlus className="w-[80px] h-[60px] md:w-[100px] md:h-[80px] mx-auto" />, title: "Flexibilidade", description: "Capacidade de adaptação a funções e equipes diversas." },
  { icon: <BicepsFlexed className="w-[80px] h-[60px] md:w-[100px] md:h-[80px] mx-auto" />, title: "Trabalho em equipe", description: "Colaboração eficaz para atingir metas em conjunto." },
  { icon: <ShieldUser className="w-[80px] h-[60px] md:w-[100px] md:h-[80px] mx-auto" />, title: "Compromisso", description: "Dedicação e responsabilidade com tarefas e prazos." },
  { icon: <Speech className="w-[80px] h-[60px] md:w-[100px] md:h-[80px] mx-auto" />, title: "Comunicação", description: "Clareza ao transmitir ideias e ouvir ativamente." }
];

function SkillCard({ src, title, description }: SkillItem) {
  return (
    <div className=" w-[150px] h-[190px]  md:w-[180px] md:h-[210px] xl:w-[230px] xl:h-[240px] border-2 border-black p-4 rounded-2xl transform transition duration-300 hover:scale-105">
      <Image className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] xl:w-[80px] xl:h-[60px] object-contain mx-auto filter invert" src={src} alt={title} />
      <h2 className="font-medium text-[15px] mt-0 md:mt-2 md:text-xl xl:text-2xl text-white ">{title}</h2>
      <p className="font-semibold text-sm mt-0 md:mt-2 xl:text-[18px]  text-gray-600">{description}</p>
    </div>
  );
}

function SoftSkillCard({ icon, title, description }: SoftSkillItem) {
  return (
    <div className="bg-white w-[150px] md:w-[180px] xl:w-[250px] h-[260px] border-2 border-black p-4 rounded-2xl transform transition duration-300 hover:scale-105">
      {icon}
      <h2 className="font-bold text-[18px] md:text-[20px] mt-2">{title}</h2>
      <p className="font-semibold text-[16px] md:text-[18px] mt-2 text-gray-600">{description}</p>
    </div>
  );
}

export function Skills() {
  return (
    <section id="habilidades" className="bg-[#03021a] text-white text-center p-12">
      <h1 className="text-3xl font-bold mb-12 font-orbitron">Tecnologias que trabalho</h1>

      <div className="mb-10">
        <h2 className="text-[20px] text-start font-semibold font-orbitron">Front-End</h2>
        <div className=" h-[2px] w-64 bg-white mt-1 rounded mx-auto" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center text-black">
        {frontSkills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>

      <div className="my-16">
        <h2 className="text-[20px] text-start font-semibold font-orbitron">Back-End</h2>
        <div className="h-[2px] w-64 bg-white mt-2 rounded mx-auto" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center text-black">
        {backSkills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>

      <div className="my-16">
        <h2 className="text-3xl font-bold font-orbitron">Habilidades Comportamentais</h2>
        <div className="h-1 w-64 bg-white mt-2 rounded mx-auto" />

      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center text-black">
        {softSkills.map((skill, index) => (
          <SoftSkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
}
