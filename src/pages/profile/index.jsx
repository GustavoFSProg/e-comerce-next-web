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
import { useContext, useEffect, useState } from 'react'

import "../../app/globals.css";


export default function Profile() {
  const { number } = useContext(CartContext)
  const [prod, setProd] = useState([])

  
  async function GetImagesProducts() {
      const produtoId =  sessionStorage.getItem('product-id')
      const {data} = await api.get(`/products-images/${produtoId}`)
      
    
    setProd(data)

    console.log(prod)
  }

  useEffect(() => {
    GetImagesProducts()
  },)


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
        produto profile!</h1>
      <br />
      <main className="flex max-md:-mt-10 flex-col items-center max-md:mr-96 max-md:-ml-36 justify-between p-24">
        <div className="max-md:flex max-md:flex-col max-md:mr-80  md:justify-center flex justify-center md:gap-5 md:flex-wrap">
         
                {prod.map((items) => {
                    return (
                        <div className='flex jsutify-center flex-col p-5' key={prod.id}>
                            <p>{items.idProduto}</p>
                <Image src={items.images} width="200" height="200" />

             
                </div>
            )
          })}
            
        </div>
      </main>
    </Pagina>
  )
}