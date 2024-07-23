'use client'

import { useContext, useState } from 'react'
import { Pagina } from '../../components/template/Pagina'
import { CartContext, CartContextProvider } from '@/data/contexts/CartContext'

export default function Carrinho() {
  const { number, adicionar, diminuir } = useContext(CartContext)

  return (
    <>
      <div>
        <Pagina>
          <div>{number}</div>
          <button onClick={adicionar}>Adicionar</button>
          <br />
          <button onClick={diminuir}>Diminuir</button>
        </Pagina>
      </div>
    </>
  )
}
