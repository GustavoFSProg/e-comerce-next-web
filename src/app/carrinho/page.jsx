'use client'

import { useContext, useState } from 'react'
import { Pagina } from '../../components/template/Pagina'
import { CartContext, CartContextProvider } from '@/data/contexts/CartContext'

export default function Carrinho() {
  const { number, increment, decrease } = useContext(CartContext)

  return (
    <>
      <div>
        <Pagina>
          <div>{number}</div>
          <button onClick={increment}>Adicionar</button>
          <br />
          <button onClick={decrease}>Diminuir</button>
        </Pagina>
      </div>
    </>
  )
}
