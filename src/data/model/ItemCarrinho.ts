import Produto from "./Product"

export default interface ItemCarrinho {
    produto: Produto
    quantidade: number
    subtotal: number

}