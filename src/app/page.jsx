'use client'

import { Pagina } from '@/components/template/Pagina'
// import Pagina from "../components/template/Pagina"
/* eslint-disable react/jsx-key */
import Products from '@/data/model/Product'
import { produtos } from '@/data/model/Products-json'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  // const [prod, setProd] = useState<Products[]>([])

  return (
    <Pagina>
      Bom dia!
      <main className="flex  flex-col items-center justify-between p-24"></main>
    </Pagina>
  )
}
