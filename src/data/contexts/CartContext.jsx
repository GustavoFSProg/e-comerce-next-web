'use client'

import { createContext, useState } from 'react'

export const CartContext = createContext(0)

export function CartContextProvider(props) {
  const [items, setItems] = useState([])
  const [number, setNumber] = useState(0)

  // function adicionar(produto) {
  //   const indice = itens.findIndex((i) => i.produto.id === produto.id)

  //   if (indice === -1) {
  //     alterarItens([...itens, { produto, quantidade: 1 }])
  //   } else {
  //     const novosItens = [...itens]
  //     novosItens[indice].quantidade++
  //     alterarItens(novosItens)
  //   }
  // }

  function adicionar() {
    setNumber(number + 1)
  }

  function diminuir() {
    setNumber(number - 1)
  }

  return (
    <div>
      <CartContext.Provider
        value={{
          items,
          setItems,
          adicionar,
          number,
          setNumber,
          diminuir,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </div>
  )
}
