'use client'

import { Cabecalho } from './Cabecalho'
import { Carrinho } from './Carrinho'

// import { PaginaProps } from './Interface'

export function Pagina() {
  return (
    <>
      <div
        className="flex w-full justify-between items-center 
      
      bg-zinc-800 h-20 px-10"
      >
        <Cabecalho />
      </div>
      <main className="w-[1200px] mx-auto h-100 bg-white text-black">MAIN</main>
    </>
  )
}

// export default Pagina
