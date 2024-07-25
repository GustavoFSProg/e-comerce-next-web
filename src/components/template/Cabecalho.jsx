'use client'

import { Carrinho } from './Carrinho'
import { Logo } from './Logo'

// import { PaginaProps } from './Interface'

export function Cabecalho() {
  return (
    <div
      // className="flex flex-row w-full"
      className="flex w-full justify-between items-center 
      
    bg-zinc-800 h-20 px-10"
    >
      <Logo />
      <Carrinho />
    </div>
  )
}

// export default Pagina
