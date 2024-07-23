'use client'

import { createContext, useState } from 'react'

export const CartContext = createContext(0)

export function CartContextProvider(props) {
  const [items, setItems] = useState([])

  function adicionar(produto) {
    const indice = itens.findIndex((i) => i.produto.id === produto.id)

    if (indice === -1) {
      alterarItens([...itens, { produto, quantidade: 1 }])
    } else {
      const novosItens = [...itens]
      novosItens[indice].quantidade++
      alterarItens(novosItens)
    }
  }

  return (
    <div>
      <CartContext.Provider
        value={{
          items,
          setItems,
          adicionar,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </div>
  )
}
