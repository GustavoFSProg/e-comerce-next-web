'use client'

import api from '@/api'
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
  const [prod, setProd] = useState([])

 async function GetDataProducts() {
    const {data} = await api.get('/products')

    setProd(data)
  }

  useEffect(() => {
    GetDataProducts()
  }, [])

  return (
    <Pagina>
        <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <h1 className="max-md:flex max-md:w-48 max-md:ml-10   max-md:justify-center" style={{fontSize: '27px', paddingLeft: '25px'}}>
        Loja Virtual de Produtos Eletrônicos</h1>
      <br />
      <main className="flex  flex-col items-center max-md:mr-96 max-md:-ml-36 justify-between p-24">
        <div className="max-md:flex max-md:flex-col max-md:mr-96  md:justify-center flex justify-center md:gap-5 md:flex-wrap">
          {prod.map((items) => {
            return (
              <div className='flex p-5' key={items.id}>

              <ProductCard
                nome={items.name}
                descricao={items.descricao}
                preco={items.preco}
                imagem={items.imagem}
                id={items.id}
                adicionar={(item => adcionar(item.produto))}
                />
                </div>
            )
          })}
        </div>
      </main>
    </Pagina>
  )
}
