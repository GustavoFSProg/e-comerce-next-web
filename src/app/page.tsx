'use client'

/* eslint-disable react/jsx-key */
import Products from "@/data/model/Product"
import { produtos } from "@/data/model/Products-json"
import Image from "next/image"
import { useState } from "react"



export default function Home() {
  // const [prod, setProd] = useState<Products[]>([])

  return (
    <main className= "flex min-h-screen flex-col items-center justify-between p-24" >

    {
      produtos.map((items) => {
        return (
          <>
          <p>{ items.name } </p>
          < img src = { items.imagem } alt = "imagems" />}
            </>


      )
    })
}




</main>
  );
}
