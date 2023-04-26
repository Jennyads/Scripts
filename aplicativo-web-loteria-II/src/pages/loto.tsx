import Lotofacil from "../components/Lotofacil";
import PaginaCarregamento from "../components/PaginaCarregamento";
import { useContexto } from "../hooks";

function Loto(){
    const {lotofacil} = useContexto();
    return(
        <>
        {lotofacil.dataApuracao ? <Lotofacil/> : <PaginaCarregamento />}
        </>
    )
}

export default Loto;