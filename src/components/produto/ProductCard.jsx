import { CartContext } from '@/data/contexts/CartContext'
import Image from 'next/image'
import { useContext } from 'react'

// export interface CartaoProdutoProps {
//   produto: Produto;
// }

export default function ProductCard(props) {
  const { items, setItems, setNumber, number } = useContext(CartContext)
  const { nome, descricao, preco, imagem } = props
  const produto = [nome, descricao, preco, imagem]

  function adicionar({ nome, descricao, preco, imagem }) {
    // const indice = items.findIndex((i) => i.props.id === props.id)

    setItems({ nome, descricao, preco, imagem })

    setNumber(number + 1)

    return console.log(items)

    //   if (indice === -1) {
    //     alteraritems([...items, { props, quantidade: 1 }])
    //   } else {
    //     const novosItens = [...itens]
    //     novosItens[indice].quantidade++
    //     alterarItens(novosItens)
    //   }
    // }
  }

  return (
    <div className="flex flex-col w-72 bg-zinc-900">
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
          <button onClick={() => adicionar({ nome, descricao, preco, imagem })}>Adicionar</button>
          {/* <button onClick={diminuir}>Diminuir</button> */}
        </div>
      </div>
    </div>
  )
}
