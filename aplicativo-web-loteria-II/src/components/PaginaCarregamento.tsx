import "../styles/carregamento.css";
import { Contexto } from "../contexts/Contexto";
import loteria from "../services/Loteria";
import { useContext, useEffect } from "react";



function PaginaCarregamento() {

    const { carregamento, setLotofacil, setMegasena, setCarregamento} = useContext(Contexto);
    useEffect(()=>{
        setTimeout(()=>{
            loteria.get().then((r)=>{
                console.log(r)
                setLotofacil(r.lotofacil)
                setMegasena(r.megasena)
                setCarregamento(true)
            })

        }, 3000)

    },[])
    return (
        <>

            <div className="loadingPage" style={{ display: carregamento ? "none" : "" }}>
                <div className="lds-hourglass"></div>

            </div>
          <hr className="linha" style={{ display: carregamento ? "" : "none" }}></hr>

        </>




    )
}
export default PaginaCarregamento;