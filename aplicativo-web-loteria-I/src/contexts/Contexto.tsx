import { createContext, useEffect, useState } from "react";
import { LoteriaProps, Props } from "../types";
import Loteria from "../services/Loteria";

const Contexto = createContext({} as LoteriaProps);

function ContextoProvider({children}:any){
  const [megasena, setMegasena] = useState({} as Props);
  const [lotofacil, setLotofacil] = useState({} as Props);
  const [carregamento, setCarregamento] = useState(false);


  useEffect(()=>{
    (async() => {
        const resp = await Loteria.get();
        setMegasena(resp.megasena);
        setLotofacil(resp.lotofacil);
        setCarregamento(resp.carregamento);
    })();
  },[]);
  return(
    <Contexto.Provider value ={{megasena, lotofacil, carregamento, setCarregamento, setLotofacil, setMegasena}}>
      {children}
    </Contexto.Provider>

  );
}
export { Contexto, ContextoProvider };