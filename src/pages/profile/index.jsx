"use client";

import api from "@/api";
import ProductCard from "@/components/produto/ProductCard";
import { Pagina } from "@/components/template/Pagina";
import { CartContext } from "@/data/contexts/CartContext";
// import Pagina from "../components/template/Pagina"
/* eslint-disable react/jsx-key */
import Products from "@/data/model/Product";
import { produtos } from "@/data/model/Products-json";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import "../../app/globals.css";

export default function Profile() {
  const { number } = useContext(CartContext);
  const [prod, setProd] = useState([]);
  const [produto, setProduto] = useState({});

  async function GetImagesProducts() {
    const produtoId = sessionStorage.getItem("product-id");
    const { data } = await api.get(`/products-images/${produtoId}`);

    setProd(data);
  }

  async function GetOneProduct() {
    const produtoId = sessionStorage.getItem("product-id");
    const { data } = await api.get(`/profile/${produtoId}`);

    setProduto(data);

    console.log(produto);
  }

  useEffect(() => {
    GetImagesProducts();
    GetOneProduct();
  }, []);

  return (
    <Pagina>
      <Link href="/product" className="ml-6">
        PRODUTO
      </Link>
      <br />
      <br />
      <h1
        className="max-md:flex max-md:w-48 max-md:ml-1 max-md:text-2xl text-3xl 
       max-md:w-72 max-md:text-center max-md:justify-center"
        style={{ paddingLeft: "25px" }}
      >
        Página do Produto!
      </h1>
      <main
        className="flex
      -mt-16 
      max-md:-mt-20
      max-md:-mt-10 flex-col items-center max-md:mr-96 max-md:-ml-36
       justify-between p-24"
      >
        <div
          className="max-md:flex max-md:flex-col max-md:mr-80 
         md:justify-center flex justify-center md:gap-5 md:flex-wrap"
        >
          <div className="flex w-full jsutify-center flex-col p-5">
            <h1 className="flex items-center w-100 text-2xl">
              Nome:
              <span className="text-xl ml-4">{produto.name}</span>
            </h1>
            <h1 className="flex mt-1 items-center w-100 text-2xl">
              Descrição:
              <span className="text-xl ml-4">{produto.descricao}</span>
            </h1>
            <h1 className="flex mt-1 items-center w-100 text-2xl">
              Preço:
              <span className="text-xl ml-4">R$ {produto.preco}</span>
            </h1>
          </div>
          <br />
          <br />

          {prod.map((items) => {
            return (
              <div className="flex jsutify-center flex-col p-5" key={prod.id}>
                <Image src={items.images} width="200" height="200" />
              </div>
            );
          })}
        </div>
      </main>
    </Pagina>
  );
}
