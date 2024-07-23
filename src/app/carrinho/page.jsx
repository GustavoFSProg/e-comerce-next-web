'use client'

import { useContext, useState } from 'react'
import { Pagina } from '../../components/template/Pagina'
import { CartContext, CartContextProvider } from '@/data/contexts/CartContext'
import ProductCard from '@/components/produto/ProductCard'

export default function Carrinho() {
  const { number, adds, adicionar, diminuir, items } = useContext(CartContext)

  return (
    <>
      <div>
        <Pagina>
          <div>{number}</div>
          <button onClick={adds}>Adicionar</button>
          <br />
          <button onClick={diminuir}>Diminuir</button>

          {/* <div className="flex gap-5 justify-center flex-wrap"> */}
          {/* {items.map((items) => { */}
          {/* return ( */}
          <ProductCard
            nome={items.nome}
            descricao={items.descricao}
            preco={items.preco}
            imagem={items.imagem}
          />
          {/* ) */}
          {/* })} */}
          {/* </div> */}
        </Pagina>
      </div>
    </>
  )
}
