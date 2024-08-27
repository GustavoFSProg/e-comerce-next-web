import { CartContext } from "@/data/contexts/CartContext";
import useLocalStorage from "@/data/hooks/useLocalStorage";
import Image from "next/image";
import { useContext, useState } from "react";

// export interface CartaoProdutoProps {
//   produto: Produto;
// }

export default function ProductCard(props) {
  const { items, setItems, setNumber, number, setQuantity, quantity } =
    useContext(CartContext);
  const { id, nome, descricao, preco, imagem } = props;
  const produto = { nome, descricao, preco, imagem };
  const { set, get } = useLocalStorage();


  function adicionar(produto) {
    const indice = items.findIndex((i) => i.produto.id === produto.id);

    if (indice === -1) {
      alterarItens([...items, { produto, quantidade: 1 }]);
      setNumber(number + 1);

      // console.log(number);

      // set("number", number);
    } else {
      const novosItens = [...items];
      setQuantity(quantity + 1);

      // setNumber(number + 1);

      // novosItens[indice].quantidade++
      alterarItens(novosItens);
    }

    return items
  }

  function alterarItens(novosItens) {
    setItems(novosItens);
    set("carrinho", novosItens);

    // setNumber(number + novosItens.lenght)
  }

  function numberToReal(numero) {
    var numero = numero.toFixed(0).split(".");
    numero[0] = numero[0].split(/(?=(?:...)*$)/).join(".");
    return numero.join(",");
  }

  return (
    <div className="flex flex-col w-72 bg-zinc-950">
      <div className="relative w-72 h-52">
        <Image src={imagem} alt={nome} fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col gap-4 p-5">
        <h2 className="text-xl font-bold"> {nome} </h2>
        <p className="flex-1 text-sm text-zinc-400"> {descricao} </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold mt-2">
            R$
            {/* <span style={{ marginLeft: "5px" }}>{numberToReal(preco)} </span> */}
          </span>
         
          <button
            className="border rounded-full px-5 py-1 text-sm"
            onClick={() =>
              adicionar({
                id,
                nome,
                quantidade: 1,
                subtotal: 0,
                descricao,
                preco,
                imagem,
              })
            }
          >
            Adicionar
          </button>
          {/* <button onClick={diminuir}>Diminuir</button> */}
        </div>
      </div>
    </div>
  );
}
