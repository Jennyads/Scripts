import "../../styles/carregamento.css";
import { useContexto } from "../../hooks";
import loteria from "../../services/Loteria";
import { useEffect } from "react";



function PaginaCarregamento() {

    const { lotofacil, megasena, carregamento, setLotofacil, setMegasena, setCarregamento} = useContexto();
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
          <hr style={{ display: carregamento ? "" : "none" }}></hr>

        </>

   )
}
export default PaginaCarregamento;