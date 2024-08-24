"use client";
import api from "@/api";
import "../../app/globals.css";

import { Cabecalho } from "@/components/template/Cabecalho";
import { Pagina } from "@/components/template/Pagina";
import { IconPhoneOutgoing } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

function CreateProduct() {
  const [imagem, setImagem] = useState([]);
  const [name, setName] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [quantity, setQuantity] = useState(1);


  async function NewProduct(event) {
    event.preventDefault();

    async (acceptedFiles, fileRejections) => {
      if (fileRejections.length > 0) {
        console.log('Rejected files:', fileRejections)
        return
      }}

    try {


      const data = new FormData();

      // async (acceptedFiles, fileRejections) => {
      //   if (fileRejections.length > 0) {
      //     console.log('Rejected files:', fileRejections)
      //     return
      //   }
    
      // data.append("imagem", imagem);
      imagem.forEach((file) => data.append("imagem", file));
      acceptedFiles.forEach((file) => data.append("imagem", file));
    
      data.append("name", name);
      data.append("descricao", descricao);
      data.append("preco", preco);
      data.append("subtotal", subtotal);
      data.append("quantity", quantity);

      await api.post("/create-product", data);
      // }
      return alert("Produto cadastrado com sucesso!");
    } catch (error) {
      return alert(`ERROR: ${error}`);
    }
  }

  return (
    <Pagina>
      <h1 className="text-2xl">CADASTRO DE PRODUTOS!</h1>
      <div className="flex w-100 max-md:justify-start justify-center text-black mt-20">
        <form
          onSubmit={NewProduct}
          className="flex flex-col h-60 items-center justify-center
         w-100 "
        >
          <input
            type="file"
            // value={image}
            onChange={(e) => setImagem(e.target.value[0])}
            multiple
            className="text-white"
            placeholder="imagem"
          />

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-slate-200 w-80 p-3 text-xs mt-5 
           rounded text-stone-800"
            placeholder="nome"
          />

          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="bg-slate-200 w-80 p-3 text-xs mt-5 
           rounded text-stone-800"
            placeholder="descrição"
          />

          <input
            type="text"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            className="bg-slate-200 w-80 p-3 text-xs mt-5 
           rounded text-stone-800"
            placeholder="preço"
          />

          <button
            type="submit"
            className="flex w-80 items-center justify-center 
           bg-slate-500 p-3 
           text-sm mt-5 rounded text-slate-200"
          >
            CADASTRAR
          </button>
        </form>
      </div>
    </Pagina>
  );
}

export default CreateProduct;
