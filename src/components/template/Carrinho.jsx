'use client'

import Link from 'next/link'
import { Logo } from './Logo'
import { IconShoppingCart } from '@tabler/icons-react'

// import { PaginaProps } from './Interface'

export function Carrinho() {
  return (
    <Link href="/carrinho">
      <div className="flex items-center relative">
        <IconShoppingCart size={32} stroke={1} />-
        <div
          className="
        flex justify-center items-center
        text-xs
        font-bold
        absolute w-6 p-px  h-6 -top-2.5 -right-2.5 w-6 h-6 bg-red-600 rounded-full"
        >
          19
        </div>
      </div>
    </Link>
  )
}
