import api from "@/api";
import { useEffect, useState } from "react";

export default function TotalCarrinho(props) {
  const [totem, setTotem] = useState(0);
  const [myCep, setMyCep] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [frete, setFrete] = useState("");

  const total = props.itens.reduce(
    (acc, item) => acc + item.produto.preco * item.produto.quantidade,
    0
  );
  function getTotal() {
    const total = props.itens.reduce(
      (acc, item) => acc + item.produto.preco * item.produto.quantidade,
      0
    );

    setTotem(total);
  }

  function numberToReal(numero) {
    var numero = numero.toFixed(2).split(".");
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join(".");
    return numero.join(",");
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

  function checkCEP(CEP) {
    //  e.prevent.default()
    // const cep = e.target.value.replace(/\D/g, '');
    // console.log(myCep);
    fetch(`https://viacep.com.br/ws/${CEP}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // register({ name: 'address', value: data.logradouro });
        setLogradouro(data.logradouro);
        setNeighborhood(data.bairro);
        //   setValue('neighborhood', data.bairro);
        setCidade(data.localidade);
        setEstado(data.estado);
        //   setValue('uf', data.uf);
        //   setFocus('addressNumber');
      });

      setFrete("Frete: R$ 26,50") 
    // return data
  }

  function getURLCEP(e) {
    e.prevent.default();

    console.log(` myCep: ${myCep}`);
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
    <div
      className="flex max-md:-mt-16 max-md:flex-col max-md:items-start 
        items-center justify-between
         bg-zinc-900 rounded-md p-7"
    >
      <div className="flex flex-col justify-between">
        <span className=" text-zinc-500">Total</span>
        <span className="text-3xl max-md:mb-4 font-bold text-yellow-500">
          {numberToReal(total)}
        </span>
      </div>
      <button
        onClick={getTotal}
        className="bg-green-600 
             max-md:mb-8  px-4
             py-2 rounded-md text-xl"
      >
        Calcular o Total
      </button>
      <div
        // onSubmit={() => getURLCEP()}
        className="flex flex-col justify-center 
            max-md:w-52"
      >
        <input
          type="text"
          className="bg-slate-200 w-80 p-3 
              max-md:w-52
              text-base   mt-2 
              rounded text-stone-800"
          id="myCep"
          name="myCep"
          value={myCep}
          placeholder="CEP"
          onChange={(e) => setMyCep(e.target.value)}
        />
        <div
          className="flex
            mt-8
              
              h-5 w-16 items-center justify-center"
        >
          <span>PAC</span>
          <input
            type="checkbox"
            className="bg-slate-200 w-80 p-3 
              max-md:w-52
              text-base  
              h-4 
              rounded text-stone-800"
            //   id="myCep"
            //   name="myCep"
            // value={myCep}
            // placeholder="CEP"
            // onChange={(e) => setMyCep(e.target.value)}
          />
        </div>

        <div
          className="flex
            mt-3
              
              h-5 w-20 items-center justify-center"
        >
          <span>SEDEX</span>
          <input
            type="checkbox"
            className="bg-slate-200 w-80 p-3 
              max-md:w-52
              text-base  
              h-4 
              rounded text-stone-800"
            //   id="myCep"
            //   name="myCep"
            // value={myCep}
            // placeholder="CEP"
            // onChange={(e) => setMyCep(e.target.value)}
          />
        </div>

        <br />
        <button
          type="button"
          onClick={() => checkCEP(myCep)}
          className="bg-green-600  max-md:mb-8  px-4
             py-2 rounded-md text-xl"
        >
          Calcular o Frete
        </button>
        <br />

        <p className="mt-3">
          RUA:
          <span className="ml-3">{logradouro}</span>
        </p>
        <br />

        <p>
          BAIRRO:
          <span className="ml-3">{neighborhood}</span>
        </p>
        <br />

        <p>
          CIDADE:
          <span className="ml-3">{cidade}</span>
        </p>
        <br />
        <p>
          ESTADO:
          <span className="ml-3">{estado}</span>
        </p>
        <br />


      <p className="text-2xl">
        {frete}
      </p>
      </div>

      <br />
      <br />

      <button className="bg-green-600 px-4 py-2 rounded-md text-xl">
        Finalizar
      </button>
    </div>
  );
}
