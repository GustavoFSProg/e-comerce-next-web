import { IconShoppingCartOff } from "@tabler/icons-react";
import Link from "next/link";

export default function CarrinhoVazio() {
  return (
    <div className="flex max-md:mb-10 max-md:-mt-20 flex-col max-md:ml-72 max-md:w-screen  max-md:justify-center items-center gap-4 text-zinc-500">
      <IconShoppingCartOff
        className="flex max-md:-ml-14"
        size={150}
        stroke={0.5}
      />
      <div>
        <h2 className="text-3xl ">Seu carrinho está vazio</h2>
        <p>Adicione produtos clicando no botão abaixo</p>
      </div>
      <Link
        href="/"
        className="flex max-md:-ml-14 bg-green-500 text-white rounded-sm px-4 py-2"
      >
        Ver produtos
      </Link>
    </div>
  );
}
