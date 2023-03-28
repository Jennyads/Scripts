import { createContext, useState } from "react";
import { Props } from "../types";

const Contexto = createContext<Props>({} as Props);

function Provider({children}:any){
  const [nome, setNome]= useState("");
  const [idade, setIdade]= useState("");

  return (
    <Contexto.Provider value={{nome,idade, setNome, setIdade}}>
      {children}     
    </Contexto.Provider>
  );
}

export { Contexto, Provider };