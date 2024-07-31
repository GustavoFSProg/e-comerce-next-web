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
            <h1 className="flex items-center justify-center
            
             ml-80 w-full
            max-md:flex max-md:w-screen leading-10 text-3xl
            max-md:text-2xl
            max-md:mr-72 max-md:-ml-96 pr-80"
            >CARRINHO DE COMPRAS</h1>
            <br />
            <br />

            {items.length === 0 ? (
      <div className="flex  flex-col w-full max-md:mr-96 max-md:-ml-96 justify-center p-24">
              <CarrinhoVazio />
              </div>
            ) : (
      // <main className="flex  flex-col items-center max-md:mr-600 justify-between p-24">

      <main className="flex  flex-col items-center max-md:mr-96 max-md:-ml-32 justify-between p-24">


              <div className="max-md:flex max-md:flex-col max-md:mr-80  md:justify-center flex justify-center md:gap-5 md:flex-wrap">
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
