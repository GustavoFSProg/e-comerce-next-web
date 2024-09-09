"use client";

import { useState } from "react";
import { AdminScreen } from "../../components/product-images/AdminScreen";
import ImageUploader from "../../components/product-images/ImageUploader";
import { Pagina } from "@/components/template/Pagina";
import api from "@/api";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function HandleLogin(e) {

    e.preventDefault()

    try {


      const { data } = await api.post(`/login`, {email, password});
  
      
      console.log(data);

      return alert(`Login efetuado com sucesso!`)
    } catch (error) {

      console.log(error)
      return alert("ERROR!", {error})
      
    }

   

  }

  return (
    <Pagina>
      <h1 className="text-2xl">LOGIN!</h1>
      <br />

      <div
        className="flex w-100 max-md:justify-start justify-center 
items-center
text-black mt-20"
      >
        <form
          onSubmit={HandleLogin}
          className="flex flex-col h-60 i justify-center
 items-center            w-100 text-white"
        >
          <div
            className="flex w-100 flex-col max-md:justify-start justify-center 

text-black mt-2 text-white"
          >
            <span>Email:</span>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="bg-slate-200 w-80 p-3 text-base mt-2 
           rounded text-stone-800"
            />
      </div>

            <br />

            <div
            className="flex w-100 flex-col max-md:justify-start justify-center 

text-black mt-2 text-white"
          >

            <span className="-mt-2">Senha:</span>
            <input
              type="text"
              id="password"
              name="password"
              value={password}
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-slate-200 w-80 p-3 text-base mt-2 
           rounded text-stone-800"
            />
          
          </div>

          <button
            className="flex w-80 items-center justify-center 
      bg-slate-500 p-3 
      text-sm mt-5 rounded text-slate-200"
            type="submit"
          >
            CADASTRO
          </button>
        </form>
      </div>
    </Pagina>
  );
}

export default Login;
