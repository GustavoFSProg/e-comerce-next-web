"use client";

import { Cabecalho } from "./Cabecalho";

// import { PaginaProps } from './Interface'

export function Pagina(props) {
  return (
    <>
      <div
        className="flex overflow-x-hidden flex-col items-center
      
      bg-zinc-950 h-20  min-h-screen"
      >
        {/* <div className="fixed top-0 left-0 right-0"> */}

        <Cabecalho  />
        {/* </div> */}
        <main
          className={`flex-1 w-[1200px] mx-auto h-100 bg-zinc-900 text-white ${
            props.className ?? ""
          } py-10 px-5`}
        >
          {props.children}
        </main>
      </div>
    </>
  );
}
