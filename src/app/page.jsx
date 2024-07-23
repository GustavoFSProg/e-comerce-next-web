'use client'

import ProductCard from '@/components/produto/ProductCard'
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
      <main className="flex  flex-col items-center justify-between p-24">
        <ProductCard
          nome="PC - Notebook"
          descricao="Desxcrição - 1"
          preco={22}
          imagem="https://images.unsplash.com/photo-1482746673045-d8c155829510?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </main>
    </Pagina>
  )
}
