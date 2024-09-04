import { useEffect, useState } from "react";

export default function TotalCarrinho(props) {
    const [totem, setTotem] = useState(0)
    
    const total = props.itens.reduce((acc, item) => acc + item.produto.preco * item.produto.quantidade, 0)
    function getTotal(){
    const total = props.itens.reduce((acc, item) => acc + item.produto.preco * item.produto.quantidade, 0)

        setTotem(total)

   }
    
    function numberToReal(numero) {
        var numero = numero.toFixed(2).split('.');
        numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
        return numero.join(',');
    }
    
    // useEffect(() => {
    //     getTotal()

    //     }, [total])



    return (
        <div className="flex max-md:-mt-16 max-md:flex-col max-md:items-start items-center justify-between
         bg-zinc-900 rounded-md p-7">
            <div className="flex flex-col justify-between">
                <span className=" text-zinc-500">Total</span>
                <span className="text-3xl max-md:mb-4 font-bold text-yellow-500">
                    {numberToReal(total)}</span>
                  
            </div>
            <button onClick={getTotal} className="bg-green-600  max-md:mb-8  px-4
             py-2 rounded-md text-xl">Calcular o Total</button>

            {/* <input
              type="text"
              className="bg-slate-200 w-80 p-3 text-base   mt-2 
           rounded text-stone-800"
            //   id="descricao"
            //   name="descricao"
            //   value={descricao}
              placeholder="CEP"
            //   onChange={(e) => setDescricao(e.target.value)}
            />
            <button onClick={getTotal} className="bg-green-600  max-md:mb-8  px-4
             py-2 rounded-md text-xl">Calcular o Frete</button> */}
            <button className="bg-green-600 px-4 py-2 rounded-md text-xl">Finalizar</button>
        </div>
    )
}
