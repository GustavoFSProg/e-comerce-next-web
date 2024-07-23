'use client'

import { createContext, useState } from 'react'

export const CartContext = createContext(0)

export function CartContextProvider(props) {
  const [items, setItems] = useState({})
  const [number, setNumber] = useState(0)

  function adds() {
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
          number,
          setNumber,
          adds,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </div>
  )
}
