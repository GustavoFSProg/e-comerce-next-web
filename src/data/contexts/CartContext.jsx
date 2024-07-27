'use client'

import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const CartContext = createContext(0)

export function CartContextProvider(props) {
  const [items, setItems] = useState([])
  const [number, setNumber] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { set, get } = useLocalStorage()


  function adds() {
    setNumber(number + 1)
  }

  function diminuir() {
    setNumber(number - 1)
  }


  useEffect(() => {
    const carrinho = get('carrinho')
    if (carrinho) {
        setItems(carrinho)
    }
}, [get])

  // const { set, get } = useLocalStorage()

  // useEffect(() => {
  //   const carrinho = get('carrinho')
  //   if (carrinho) {
  //     setItens(carrinho)
  //   }
  // }, [get])

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

  return (
    <div>
      <CartContext.Provider
        value={{
          items,
          setItems,
          number,
          setNumber,
          adds,
          setQuantity,
          quantity,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </div>
  )
}
