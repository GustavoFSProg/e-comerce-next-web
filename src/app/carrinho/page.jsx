"use client";

import { useContext, useEffect, useState } from "react";
import { Pagina } from "../../components/template/Pagina";
import { CartContext, CartContextProvider } from "@/data/contexts/CartContext";
import ProductCard from "@/components/produto/ProductCardCarrinho";
import ProductCardCarrinho from "@/components/produto/ProductCardCarrinho";
import TotalCarrinho from "@/components/carrinho/TotalCarrinho";
import CarrinhoVazio from "@/components/carrinho/CarrinhoVazio";
import useLocalStorage from "@/data/hooks/useLocalStorage";

export default function Carrinho() {
  const { number, adds, setNumber, items } = useContext(CartContext);
  const [data, setData] = useState([]);

  const { set, get } = useLocalStorage();

  console.log(` IOtems carrrinho: ${items.produto}`);

  function GetDataProducts() {
    setData(items.produto);
    console.log(`items: ${items}`);
  


    // const numero = get('number')

    // setNumber(numero)

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
            <h1 style={{ fontSize: "30px" }}>CARRINHO DE COMPRAS</h1>
            <br />
            <br />

            {items.length === 0 ? (
              <CarrinhoVazio />
            ) : (
      <main className="flex  flex-col items-center max-md:mr-80 justify-between p-24">

              <div className="max-md:flex max-md:flex-col max-md:mr-96  md:justify-center flex justify-center md:gap-5 md:flex-wrap">
                {items.map((dados) => {
                  return (
                    <div className='flex p-5' key={dados.id}>
                      <ProductCardCarrinho
                        nome={dados.nome}
                        descricao={dados.descricao}
                        preco={dados.preco}
                        imagem={dados.imagem}
                        item={dados}
                        // remover={(dados) => removeres(dados.produto)}
                      />
                    </div>
                  );
                })}
              </div>
                </main>
            )}
          </div>
          <TotalCarrinho itens={items} />
        </Pagina>
      </div>
    </>
  );
}
