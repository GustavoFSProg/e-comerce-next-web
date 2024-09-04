import api from "@/api";
import { useEffect, useState } from "react";

export default function TotalCarrinho(props) {
    const [totem, setTotem] = useState(0)
    const [myCep, setMyCep] = useState("")
    const [neighborhood, setNeighborhood] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    
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

    
    // const checkCEP = (e) => {
    //     const cep = e.target.value.replace(/\D/g, '');
    //     console.log(cep);
    //     fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
    //       console.log(data);
    //       // register({ name: 'address', value: data.logradouro });
    //       setValue('address', data.logradouro);
    //       setValue('neighborhood', data.bairro);
    //       setValue('city', data.localidade);
    //       setValue('uf', data.uf);
    //       setFocus('addressNumber');
    //     });
    //   } 


    const checkCEP = () => {
                 
        // const cep = e.target.value.replace(/\D/g, '');
        // console.log(myCep);
        fetch("https://viacep.com.br/ws/93340040/json/").then(res => res.json()).then(data => {
          console.log(data);
          // register({ name: 'address', value: data.logradouro });
          setNeighborhood(data.bairro);
        //   setValue('neighborhood', data.bairro);
          setCidade(data.localidade);
          setEstado(data.estado);
        //   setValue('uf', data.uf);
        //   setFocus('addressNumber');
        });
      }

// async function getCep() {
//    const {dados} =  await api.post('/cep', {CEP: '93340040'})
//     setMyCep(dados)

//     console.log(`Retorno: ${toString( myCep)}`)
//     // return dados
//     }
    
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
            {/* <form onSubmit={checkCEP}>  */}

            <input
              type="text"
              className="bg-slate-200 w-80 p-3 text-base   mt-2 
              rounded text-stone-800"
              //   id="descricao"
                name="myCep"
              value={myCep}
              placeholder="CEP"
              onChange={(e) => setMyCep(e.target.value)}
              />
            <button type="submit" onClick={() => checkCEP()}  className="bg-green-600  max-md:mb-8  px-4
             py-2 rounded-md text-xl">Calcular o Frete</button>
             {/* </form> */}
             <p>
                BAIRRO: 
                <span>
                    {neighborhood}
                </span>
             </p>
             <br />

             <p>
                CIDADE: 
                <span>
                    {cidade}
                </span>
             </p>
             <br />

             <p>
                ESTADO: 
                <span>
                    {estado}
                </span>
             </p>
             <br />
             <br />

            <button className="bg-green-600 px-4 py-2 rounded-md text-xl">Finalizar</button>
        </div>
    )
}
