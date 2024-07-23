'use client'

import { Cabecalho } from './Cabecalho'

// import { PaginaProps } from './Interface'

export function Pagina(props) {
  return (
    <>
      <div
        className="flex flex-col items-center
      
      bg-zinc-900 h-20  min-h-screen"
      >
        <Cabecalho />
        <main
          className={`flex-1 w-[1200px] mx-auto h-100 bg-zinc-600 text-white ${
            props.className ?? ''
          } py-10 `}
        >
          MAIN
        </main>
      </div>
    </>
  )
}
