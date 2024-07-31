import { CartContext } from "@/data/contexts/CartContext";
import useLocalStorage from "@/data/hooks/useLocalStorage";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

// export interface CartaoProdutoProps {
//   produto: Produto;
// }

export default function ProductCardCarrinho(props) {
  const { items, setItems, setNumber, number, setQuantity, quantity } =
    useContext(CartContext);
  const { id, nome, descricao, preco, quantidade, imagem } = props;
  const produto = { nome, descricao, preco, imagem };
  const { set, get } = useLocalStorage();
  const [qtd, setQtd] = useState(1);
  const [subtotal, setSubtotal] = useState(0);

  function adicionar(props) {
    const indice = items.findIndex((i) => i.id === props.id);

    if (indice === -1) {
      setItems([...items, { id, nome, descricao, preco, imagem }]);

      setNumber(number + 1);
    } else {
      setItems([...items]);

      setQuantity(quantity + 1);
    }

    return console.log(items);
  }

  function remover(produto) {
    const novosItens = items
      .map((i) => {
        if (i.id === produto.id) {
          i.quantidade--;
        }
        return i;
      })
      .filter((i) => i.quantidade > 0);
    alterarItens(novosItens);
  }

  function remover(produto) {
    const novosItens = items
      .map((i) => {
        if (i.produto.id === produto.id) {
          i.quantidade--;
        }
        return i;
      })
      .filter((i) => i.quantidade > 0);
    alterarItens(novosItens);
    setNumber(number - 1);
  }

  function alterarItens(novosItens) {
    setItems(novosItens);
    // set('carrinho', novosItens)
  }
  // console.log(items);

  // useEffect(() => {

  // }, [subtotal])


  function numberToReal(numero) {
    var numero = numero.toFixed(2).split('.');
    numero[0] =  numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}

  return (
    <div className="flex flex-col w-72 bg-zinc-950">
      <div className="relative w-72 h-52">
        <Image
          src={props.item.produto.imagem}
          alt={props.item.produto.nome}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 p-5">
        <h2 className="text-xl font-bold"> {props.item.produto.nome} </h2>
        <p className="flex-1 text-sm text-zinc-400">
          {" "}
          {props.item.produto.descricao}{" "}
        </p>
        <div className="flex justify-between  items-center">
          <div className="flex justify-between  items-left left-0 flex-col ">
            <span style={{marginLeft: '0px'}} className="text-lg font-semibold mt-2">

              PREÇO: R$ {numberToReal(props.item.produto.preco)}
            </span>
            <span className="text-lg font-semibold mt-2">
              TOTAL: R$
              <span style={{marginLeft: '7px'}}>
              {numberToReal(props.item.produto.subtotal = props.item.produto.preco * props.item.produto.quantidade.toFixed(2))}

              </span>
              {/* <span className="text-lg font-semibold mt-2">
              SUB: R$
              <span style={{marginLeft: '7px'}}>
              {numberToReal(props.item.produto.subtotal)}

              </span>
              </span> */}
{/* 
              {/* {`Quantidade: ${props.item.produto.quantidade}`} */}
            </span>
         
            <div className="flex  justify-center  items-center">
              <div className="flex flex-row w-80 bg-gray justify-between items-center mt-6">
                {/* <div className="flex flex-row w-100 bg-gray justify-center items-center"> */}

                <div className="flex justify-center items-center">
                  <button
                    style={{ fontSize: "26px", marginRight: "14px" }}
                    onClick={() => setQtd(qtd - 1)}
                  >
                    {" "}
                    <IconMinus />{" "}
                  </button>
                  <span
                    style={{
                      display: "flex",
                      background: "#172438",
                      width: "27px",
                      padding: "2px",
                      justifyContent: "center",
                    }}
                  >
                    {props.item.produto.quantidade =qtd}
                  </span>

                  <button
                    style={{ fontSize: "26px", marginLeft: "14px" }}
                    onClick={() => setQtd(qtd + 1)}
                  >
                    <IconPlus />
                  </button>
                </div>
              </div>

              <button
                style={{
                  marginTop: "22px",
                  marginLeft: "-177px",
                  height: "35px",
                }}
                className="border rounded-full px-5 py-1 text-sm"
                onClick={() => remover(props.item.produto)}
              >
                Remover
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
