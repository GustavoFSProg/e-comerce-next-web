import { CartContext } from '@/data/contexts/CartContext'
import useLocalStorage from '@/data/hooks/useLocalStorage'
import Image from 'next/image'
import { useContext } from 'react'

// export interface CartaoProdutoProps {
//   produto: Produto;
// }

export default function ProductCard(props) {
  const { items, setItems, setNumber, number } = useContext(CartContext)
  const { id, nome, descricao, preco, imagem } = props
  const produto = { nome, descricao, preco, imagem }
  const { set, get } = useLocalStorage()

  function adicionar(props) {
    const indice = items.findIndex((i) => i.id === props.id)

    if (indice === -1) {
      setItems([...items, { id, nome, descricao, preco, imagem }])

      setNumber(number + 1)
    } else {
      setItems([...items])
    }

    return console.log(items)
  }

  // function adicionar(props) {
  //   const indice = items.findIndex((i) => i.props.id === props.id)

  //   if (indice === -1) {
  //     alterarItens([...items, { props, quantidade: 1 }])
  //   } else {
  //     const novosItens = [...items]
  //     novosItens[indice].quantidade++
  //     alterarItens(novosItens)
  //   }
  // }

  // function alterarItens(novosItens) {
  //   setItems(novosItens)
  //   set('carrinho', novosItens)
  // }

  return (
    <div className="flex flex-col w-72 bg-zinc-950">
      <div className="relative w-72 h-52">
        <Image src={imagem} alt={nome} fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col gap-4 p-5">
        <h2 className="text-xl font-bold"> {nome} </h2>
        <p className="flex-1 text-sm text-zinc-400"> {descricao} </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold mt-2"> R$ {preco} </span>
          {/* <button
            onClick={() => adicionar(props.produto)}
            className="border rounded-full px-5 py-1 text-sm"
          >
            Adicionar
          </button> */}
          <button
            className="border rounded-full px-5 py-1 text-sm"
            onClick={() => adicionar({ id, nome, descricao, preco, imagem })}
          >
            Adicionar
          </button>
          {/* <button onClick={diminuir}>Diminuir</button> */}
        </div>
      </div>
    </div>
  )
}
