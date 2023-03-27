import { useState } from "react";
import Contexto from "./contexts/Contexto";
import A from "./components/A";


function App() {
  const [nome, setNome]= useState("");
  const [idade, setIdade]= useState("");
 
  return (
    <>
      <Contexto.Provider value={{nome,idade}}> 
            <A />
            <div>
              <label>Nome</label>
              <input value={nome} onChange={(e)=>setNome(e.target.value)} />
            </div>
            <div>
              <label>Idade</label>
              <input value={idade} onChange={(e)=>setIdade(e.target.value)} />
            </div>
            <div>Nome:{nome} Idade:{idade}</div>
      </Contexto.Provider>
    </>
  );
}

export default App;


