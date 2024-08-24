'use client'

import { useState } from 'react'
import { AdminScreen } from '../../components/product-images/AdminScreen'
import { Input } from '../../components/product-images/Input'
import ImageUploader from '../../components/product-images/ImageUploader'

function CreateProduct() {
  const [price, setPrice] = useState('')

  return (
    <AdminScreen >
      Cadastrar novo produto
      <Input
        type="number"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Preço do produto"
      />
      Arraste e solte as imagens no campo abaixo
      <ImageUploader />
    </AdminScreen>
  )
}

export default CreateProduct;
