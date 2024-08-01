'use client'

import { Carrinho } from './Carrinho'
import { Logo } from './Logo'

// import { PaginaProps } from './Interface'

export function Cabecalho() {
  return (
    <div
    
      className="flex w-full max-md:w-screen pt-3 pb-3 justify-between items-center 
      
    bg-zinc-800 h-20 px-10 max-md:h-auto max-md:pt-5 max-md:pb-4"
    >
      <Logo />
      <Carrinho />
    </div>
  )
}

// export default Pagina
