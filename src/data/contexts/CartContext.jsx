'use client'

import { createContext, useState } from 'react'

export const CartContext = createContext(0)

export function CartContextProvider(props) {
  const [number, setNumber] = useState(4)

  return (
    <div>
      <CartContext.Provider
        value={{
          number,
          setNumber,
          adicionar: () => {
            setNumber(number + 1)
          },
          remover: () => {
            setNumber(number - 1)
          },
        }}
      >
        {props.children}
      </CartContext.Provider>
    </div>
  )
}
