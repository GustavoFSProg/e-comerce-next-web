"use client";
import '../../app/globals.css'

import { Cabecalho } from "@/components/template/Cabecalho";
import { Pagina } from "@/components/template/Pagina";
import { IconPhoneOutgoing } from '@tabler/icons-react';
import Link from 'next/link';

function CreateProduct() {
  return (
    <Pagina >
        <h1 className="text-2xl">CADASTRO DE PRODUTOS!</h1>
      <div className="flex w-100 max-md:justify-start justify-center text-black mt-20">

      

        <form className="flex flex-col h-60 items-center justify-center
         w-100 ">
           <input type="file" className='text-white' placeholder="imagem"/>
           <input type="text"  className="bg-slate-200 w-80 p-3 text-xs mt-5 
           rounded text-stone-800" placeholder="nome"/>

           <input type="text" 
           className="bg-slate-200 w-80 p-3 text-xs mt-5 
           rounded text-stone-800"
           placeholder="descrição"/>

           <input type="text" 
           className="bg-slate-200 w-80 p-3 text-xs mt-5 
           rounded text-stone-800"
           placeholder="preço"/>

           
           <button className="flex w-80 items-center justify-center 
           bg-slate-500 p-3 
           text-sm mt-5 rounded text-slate-200">
            CADASTRAR
           </button>
        </form>
           </div>

   
  </Pagina>
  );
}

export default CreateProduct;
