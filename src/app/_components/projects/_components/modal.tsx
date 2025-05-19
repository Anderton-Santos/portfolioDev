"use client";

import {use} from 'react'
import { OrderContext } from '@/providers/modal';

import { X } from "lucide-react";


export function ModalOrder() {
  const {onRequestClose} = use(OrderContext)



  return (
    <dialog className="fixed left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-[999] overflow-auto flex items-center justify-center p-4 backdrop-blur">
      <section className="bg-white h-full w-[80%] mx-auto overflow-hidden lg:w-[60%]">
        <button onClick={onRequestClose}>
          <X size={40} color="#FF3f4b"/>
        </button>
        
        <div>
          imagem
        </div>

        <article>
          <h1>Titulo</h1>
          <span>decrição do produto</span>
          <div>
            <span>links para visualizção:</span>

            <div>
              links
            </div>
          </div>
        </article>

      </section>
    </dialog>
  
  );
}


