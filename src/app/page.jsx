'use client'

import { Pagina } from '@/components/template/Pagina'
import { CartContext } from '@/data/contexts/CartContext'
// import Pagina from "../components/template/Pagina"
/* eslint-disable react/jsx-key */
import Products from '@/data/model/Product'
import { produtos } from '@/data/model/Products-json'
import Image from 'next/image'
import { useContext, useState } from 'react'

export default function Home() {
  const { number } = useContext(CartContext)

  return (
    <Pagina>
      Bom dia!
      <br />
      {number}
      <main className="flex  flex-col items-center justify-between p-24"></main>
    </Pagina>
  )
}
