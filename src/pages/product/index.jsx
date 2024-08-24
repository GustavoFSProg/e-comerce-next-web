"use client";

import { useState } from "react";
import { AdminScreen } from "../../components/product-images/AdminScreen";
import { Input } from "../../components/product-images/Input";
import ImageUploader from "../../components/product-images/ImageUploader";
import { Pagina } from "@/components/template/Pagina";

function CreateProduct() {
  const [price, setPrice] = useState("");

  return (
    <Pagina>
      <h1 className="text-2xl">CADASTRO DE PRODUTOS!</h1>
      <br />
      <AdminScreen>
        <ImageUploader />
      </AdminScreen>
    </Pagina>
  );
}

export default CreateProduct;
