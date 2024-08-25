"use client";

import { AdminScreen } from "../../components/product-images/AdminScreen";
import ImageUploader from "../../components/product-images/ImageUploader";
import { Pagina } from "@/components/template/Pagina";

function CreateProduct() {

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
