'use client'

import { useState } from 'react'
import { Pagina } from '../../components/template/Pagina'

export default function Carrinho() {
  const [number, setNumber] = useState(0)
  return (
    <>
      <div>
        <Pagina>
          <div>{number}</div>
          <button onClick={() => setNumber(number + 1)}>Adicionar</button>
          <br />
          <button onClick={() => setNumber(number - 1)}>Diminuir</button>
        </Pagina>
      </div>
    </>
  )
}
