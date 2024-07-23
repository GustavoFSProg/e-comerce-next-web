'use client'

import { Cabecalho } from './Cabecalho'
import { Carrinho } from './Carrinho'

// import { PaginaProps } from './Interface'

export function Pagina() {
  return (
    <header
      className="flex w-full justify-between items-center 
    
    bg-zinc-800 h-20 px-10"
    >
      <Cabecalho />
      <Carrinho />
    </header>
  )
}

// export default Pagina
