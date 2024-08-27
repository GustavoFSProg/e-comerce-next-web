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
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'

export default function Home() {
  const { number } = useContext(CartContext)
  const [prod, setProd] = useState([])

  const navigate = useRouter()



 async function GetDataProducts() {
    const {data} = await api.get('/products')

    
    setProd(data.products)
  }

  function handleProfile(productId){
     sessionStorage.setItem('product-id', productId)

     navigate.push('/profile')
  }

  useEffect(() => {
    GetDataProducts()
  }, [])

  return (
    <Pagina>
      <Link href="/product" className='ml-6'>
        PRODUTO
      </Link>
      <br />
      <br />
      
        
      <h1 className="max-md:flex max-md:w-48 max-md:ml-1 max-md:text-2xl text-3xl 
       max-md:w-72 max-md:text-center max-md:justify-center" 
      style={{ paddingLeft: '25px'}}>
        Loja Virtual de Produtos Eletrônicos</h1>
      <main className="flex max-md:-mt-10 flex-col
      -mt-10
      items-center max-md:mr-96 max-md:-ml-36 justify-between p-24">
        <div className="max-md:flex max-md:flex-col max-md:mr-80  md:justify-center flex justify-center md:gap-5 md:flex-wrap">
          {prod.map((items) => {
            return (
                <div  className='flex cursor-pointer flex-col p-5'>
              <div onClick={() => handleProfile(items.id)}
               key={items.id}>
                <h1 className='flex bg-slate-800 p-3'>CLIQUE AQUI IR PARA O PRODUTO</h1>
                </div>
                <br />
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
