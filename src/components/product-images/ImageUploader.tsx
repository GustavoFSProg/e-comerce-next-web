import React, { useCallback, useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { AxiosResponse } from "axios";
import { styled } from "styled-components";
import api from "@/api";
import "../../app/globals.css";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 3rem;
  margin: 2rem;
`;
const Message = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  border: 1px dashed darkgray;
`;

interface Product {
  id: string;
  name: string;
  preco: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
// const initialState = [{ id: '', name: '', preco: '0.0', image: '', createdAt: '', updatedAt: '' }]

let Name = "";
let Preco = "";
let Descricao = "";
let Subtotal = "";
let Quantity = "";

const ImageUploader: React.FC = () => {
  const [uploading, setUploading] = useState<boolean>(false);
  // const [progress, setProgress] = useState<number>(0)
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [subtotal, setSubtotal] = useState("0");
  const [quantity, setQuantity] = useState("1");

  const handleDropAsync = useCallback(
    async (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (fileRejections.length > 0) {
        console.log("Rejected files:", fileRejections);
        return;
      }

      setUploading(true);

      try {
        const formData = new FormData();
        console.log(`NOME: ${name}`),
          acceptedFiles.forEach((file) => formData.append("imagem", file));
        formData.append("name", Name);
        formData.append("preco", Preco);
        formData.append("descricao", Descricao);
        formData.append("subtotal", subtotal);
        formData.append("quantity", quantity);
        const response: AxiosResponse<[]> = await api.post(
          "/create-product",
          formData,
          {
            onUploadProgress: (event) => {
              const progress: number = Math.round(
                (event.loaded * 100) / (event.total || 1)
              );
              console.log(`As imagens estão ${progress}% carregadas...`);
            },
          }
        );

        setUploading(false);
        const newUploadedImages = response.data;
        setProducts(newUploadedImages);

        return alert("PRODUTO CADASTRADO!");
      } catch (error: unknown) {
        console.error("Error uploading images:", error);
        setUploading(false);
      }
    },
    []
  );

  const onDropCallback = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      handleDropAsync(acceptedFiles, fileRejections).catch((error) => {
        console.error("Error in handleDropAsync:", error);
      });
    },
    [handleDropAsync]
  );

  function handleInputs(event: { preventDefault: () => void }) {
    event.preventDefault();

    Name = name;
    Preco = preco;
    Descricao = descricao;
    // Subtotal = subtotal
    // Quantity = quantity

    return console.log(`MEU:${name}`);
  }
  // accept={{ 'imagem/*': [] }}

  return (
    <>
      <Dropzone onDrop={onDropCallback} multiple>
        {({ getRootProps, getInputProps }) => (
          <div
            className="flex w-full bg-slate-400 h-40 text-black
          rounded
          justify-center
          items-center"
            {...getRootProps()}
          >
            <input {...getInputProps()} />

            <Message>
              Arraste e solte as imagens aqui ou clique para selecionar.
            </Message>
            {uploading && <p>Carregando...</p>}
          </div>
        )}
        
      </Dropzone>

     
      <div
        className="flex w-100 max-md:justify-start justify-center 
items-center
text-black mt-20"
      >
        <form
          onSubmit={handleInputs}
          className="flex flex-col h-60 i justify-center
 items-center            w-100 text-white"
        >
       
          <div
            className="flex w-100 flex-col max-md:justify-start justify-center 

text-black mt-2 text-white"
          >
            <span>Nome:</span>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
              className="bg-slate-200 w-80 p-3 text-base mt-2 
           rounded text-stone-800"
            />

            <br />

            <span className="-mt-2">Preço:</span>
            <input
              type="text"
              id="preco"
              name="preco"
              value={preco}
              placeholder="Preço"
              onChange={(e) => setPreco(e.target.value)}
              className="bg-slate-200 w-80 p-3 text-base mt-2 
           rounded text-stone-800"
            />
            <br />
            <span className="-mt-2">Descrição:</span>
            <input
              type="text"
              className="bg-slate-200 w-80 p-3 text-base   mt-2 
           rounded text-stone-800"
              id="descricao"
              name="descricao"
              value={descricao}
              placeholder="Descrição"
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

         

          {/* <button
            className="flex w-80 items-center justify-center 
      bg-slate-500 p-3 
      text-sm mt-5 rounded text-slate-200"
            type="submit"
          >
            CADASTRO
          </button> */}
        </form>
      </div>
      <br />

      {/* {products !== initialState && (
        <div>
          <h3>Produtos carregados:</h3>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {products.map((product, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <img src={product.image} alt={String(index)} width="160" />
                <p> ID produto: {product.id}</p>
                <p>Nome do produto: {product.name}</p>
                <p>Preço: {product.price}</p>
                <p>Data de cadastro: {product.createdAt}</p>
                <p>Data de atualização: {product.updatedAt}</p>
              </div>
            ))}
          </div>
        </div>
      )} */}
    </>
  );
};

export default ImageUploader;
