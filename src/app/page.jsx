'use client'

import ProductCard from '@/components/produto/ProductCard'
import { Pagina } from '@/components/template/Pagina'
import { CartContext } from '@/data/contexts/CartContext'
// import Pagina from "../components/template/Pagina"
/* eslint-disable react/jsx-key */
import Products from '@/data/model/Product'
import { produtos } from '@/data/model/Products-json'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'

export default function Home() {
  const { number } = useContext(CartContext)
  const [data, setData] = useState([])

  function GetDataProducts() {
    setData(produtos)
  }

  useEffect(() => {
    GetDataProducts()
  }, [])

  return (
    <Pagina>
      Bom dia!
      <br />
      {number}
      <main className="flex  flex-col items-center justify-between p-24">
        <div className="flex gap-5 justify-center flex-wrap">
          {data.map((items) => {
            return (
              <ProductCard
                nome={items.name}
                descricao={items.descricao}
                preco={items.preco}
                imagem={items.imagem}
                id={items.id}
              />
            )
          })}
        </div>
      </main>
    </Pagina>
  )
}
