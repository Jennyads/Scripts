import Megasena from "../components/Megasena";
import PaginaCarregamento from "../components/PaginaCarregamento";
import { useContexto } from "../hooks";

function Mega(){
    const {megasena} = useContexto();
    return(
        <>
        {megasena.dataApuracao ? <Megasena/> : <PaginaCarregamento />}
        </>
    )
}

export default Mega;