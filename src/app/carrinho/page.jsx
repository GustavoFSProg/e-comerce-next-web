'use client'

import { useContext, useState } from 'react'
import { Pagina } from '../../components/template/Pagina'
import { CartContext, CartContextProvider } from '@/data/contexts/CartContext'

export default function Carrinho() {
  const { number, adiconar, remover } = useContext(CartContext)

  return (
    <>
      <div>
        <Pagina>
          <div>{number}</div>
          <button onClick={adiconar}>Adicionar</button>
          <br />
          <button onClick={remover}>Diminuir</button>
        </Pagina>
      </div>
    </>
  )
}
