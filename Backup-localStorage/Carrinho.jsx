'use client'

import Link from 'next/link'
import { Logo } from './Logo'
import { IconShoppingCart } from '@tabler/icons-react'
import { useContext } from 'react'
import { CartContext } from '@/data/contexts/CartContext'
import useLocalStorage from '@/data/hooks/useLocalStorage'

// import { PaginaProps } from './Interface'

export function Carrinho() {
  const { number, setNumber } = useContext(CartContext)
  const { set, get } = useLocalStorage()

  // const  newNumber = get('number')
  //  setNumber(newNumber)
  return (
    <Link href="/carrinho">
      <div className="flex items-center relative mr-2">
        <IconShoppingCart size={32} stroke={1} />
        <div
          className="
        flex justify-center items-center
        text-xs
        font-bold
        absolute w-6 p-px  h-6 -top-2.5 ml-4 w-6 h-6 bg-red-600 rounded-full"
        >
          {number}
        </div>
      </div>
    </Link>
  )
}
