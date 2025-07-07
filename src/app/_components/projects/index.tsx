"use client";
import { use } from 'react';
import { OrderContext } from '@/providers/modal';
import { ProjectCard } from './_components/projectCard';

// Imagens
import projetoApi from '../../../../public/pededeli.png';
import cilio from '../../../../public/Cilio.png';
import pededeli from '../../../../public/pededeliweb.png';
import closeDely from '../../../../public/closedely.png';
import chamados from '../../../../public/controle.png';
import node from '../../../../public/nodedotjs.png';
import express from '../../../../public/express.png';
import ts from '../../../../public/typescript.png';
import react from '../../../../public/react.png';
import next from '../../../../public/nextdotjs.png';
import post from '../../../../public/postgresql.png';
import firebase from '../../../../public/firebase.png';
import tailwind from '../../../../public/tailwindcss.png';
import anUi from '../../../../public/anUii.png';

export function Projects() {
  const { onRequestOpen } = use(OrderContext);

  const projects = [
    {
      title: "PedeDeli - API",
      description: "API desenvolvida para dashboard(admin) PedeDeli, a qual fornece toda a estrutura necessária para o cadastro e categorias dos produtos para serem exibidos na loja.",
      image: projetoApi,
      techs: [
        { icon: node, name: "NodeJs" },
        { icon: express, name: "Express" },
        { icon: ts, name: "TypeScript" },
        { icon: post, name: "PostgreSQL" }
      ],
      links: [
        { label: "GitHub", url: "https://github.com/Anderton-Santos/PedeDeli-API" },
        { label: "LinkedIn", url: "https://www.linkedin.com/posts/anderton-silva-165a32289_webdevelopment-typescript-nextjs-activity-7347437647339913216-pHy8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYZCV0B5A57KJN7bXF9CdH8xl5KtEtUavQ" }
      ]
    },
    {
      title: "PedeDeli - Web",
      description: "Painel administrativo onde o lojista gerencia produtos, categorias e pedidos, enquanto os clientes compram em tempo real com praticidade.",
      image: pededeli,
      techs: [
        { icon: ts, name: "TypeScript" },
        { icon: react, name: "React" },
        { icon: next, name: "Next" },
        { icon: post, name: "PostgreSQL" },
        { icon: tailwind, name: "Tailwind" }
      ],
      links: [
        { label: "GitHub", url: "https://github.com/Anderton-Santos/PedeDeli-Front" },
        { label: "LinkedIn", url: "https://www.linkedin.com/posts/anderton-silva-165a32289_nextjs-typescript-nodejs-activity-7347438094524059648-QKxT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYZCV0B5A57KJN7bXF9CdH8xl5KtEtUavQ"},
        { label: "YouTube", url: "https://youtu.be/xXRNyBCT2Yg" },
        { label: "Site", url: "https://pede-deli-front-git-main-anderton-santos-projects.vercel.app/" }
      ]
    },
    {
      title: "Cílios da Maria",
      description: "Site institucional com apresentação da profissional, tabelas de preços organizadas por serviço e rotas com links diretos para contato.",
      image: cilio,
      techs: [
        { icon: ts, name: "TypeScript" },
        { icon: react, name: "React" },
        { icon: tailwind, name: "Tailwind" }
      ],
      links: [
        { label: "GitHub", url: "https://github.com/Anderton-Santos/LeadingPage-LashDesigner" },
        { label: "LinkedIn" },
        { label: "Site", url: "https://leading-page-lash-designer.vercel.app/" }
      ]
    },
    {
      title: "CloseDely - Gestão de pedidos",
      description: "Sistema de registro de pedidos externos (WhatsApp e apps de delivery), permitindo melhor organização com cálculos separados por forma de pagamento e plataforma.",
      image: closeDely,
      techs: [
        { icon: ts, name: "TypeScript" },
        { icon: react, name: "React" },
        { icon: firebase, name: "Firebase" },
        { icon: tailwind, name: "Tailwind" }
      ],
      links: [
        { label: "GitHub" },
        { label: "YouTube" }
      ]
    },

    {
      title: "AnUi Framework",
      description: "Landing page responsiva desenvolvida para apresentar de forma moderna e profissional um framework fictício. Design limpo, foco em clareza e usabilidade.",
      image: anUi,
      techs: [
        { icon: ts, name: "TypeScript" },
        { icon: next, name: "React" },
        { icon: tailwind, name: "Tailwind" }
      ],
      links: [
        { label: "GitHub", url: "https://github.com/Anderton-Santos/lading-anUi" },
        { label: "LinkedIn", url: "https://www.linkedin.com/posts/anderton-silva-165a32289_nextjs-typescript-tailwindcss-activity-7347045941243228160-MlL_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYZCV0B5A57KJN7bXF9CdH8xl5KtEtUavQ" },
        { label: "Site", }
      ]
    },
    {
      title: "DevControle - Chamados",
      description: "Sistema de controle de chamados que permite visualizar solicitações em andamento e cadastrar clientes para melhor gestão do atendimento.",
      image: chamados,
      techs: [
        { icon: ts, name: "TypeScript" },
        { icon: react, name: "React" },
        { icon: next, name: "Next" },
        { icon: firebase, name: "Firebase" },
        { icon: tailwind, name: "Tailwind" }
      ],
      links: [
        { label: "GitHub" },
        { label: "LinkedIn" }
      ]
    }
  ];

  return (
    <section id="projetos" className="bg-blue-950 p-12">
      <h1 className="text-4xl font-bold mb-12 text-center text-white">Projetos</h1>
      <div className="grid grid-cols-1 gap-14 place-items-center sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
