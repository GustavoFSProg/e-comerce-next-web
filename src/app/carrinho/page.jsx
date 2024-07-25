"use client";

import { useContext, useEffect, useState } from "react";
import { Pagina } from "../../components/template/Pagina";
import { CartContext, CartContextProvider } from "@/data/contexts/CartContext";
import ProductCard from "@/components/produto/ProductCardCarrinho";
import ProductCardCarrinho from "@/components/produto/ProductCardCarrinho";
import TotalCarrinho from "@/components/carrinho/TotalCarrinho";
import CarrinhoVazio from "@/components/carrinho/CarrinhoVazio";

export default function Carrinho() {
  const { number, adds, diminuir, items } = useContext(CartContext);
  const [data, setData] = useState([]);

  console.log(` IOtems carrrinho: ${items.produto}`);

  function GetDataProducts() {
    setData(items.produto);
    console.log(`items: ${items}`);

    return console.log(`data: ${data}`);
  }

  useEffect(() => {
    GetDataProducts();
  }, [items]);

  return (
    <>
      <div>
        <Pagina>
          <div className="flex flex-col justify-center items-center">
            {/* <div>{number}</div>
            <button onClick={adds}>Adicionar</button>
            <br />
            <button onClick={diminuir}>Diminuir</button> */}

            <h1 style={{ fontSize: "30px" }}>CARRINHO DE COMPRAS</h1>
            <br />
            <br />

            {items.length === 0 ? (
              <CarrinhoVazio />
            ) : (
              <div className="flex gap-5 justify-center flex-wrap">
                {items.map((dados) => {
                  return (
                    <>
                      <ProductCardCarrinho
                        nome={dados.nome}
                        descricao={dados.descricao}
                        preco={dados.preco}
                        imagem={dados.imagem}
                        item={dados}
                        // remover={(dados) => removeres(dados.produto)}
                      />
                    </>
                  );
                })}
                <TotalCarrinho itens={items} />
              </div>
            )}
          </div>
        </Pagina>
      </div>
    </>
  );
}
