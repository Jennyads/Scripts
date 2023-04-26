
import PaginaCarregamento from "../components/PaginaCarregamento";
import Quina from "../components/Quina";
import { useContexto } from "../hooks";

function QuinaPage(){
    const {quina} = useContexto();
    return(
        <>
        {quina.dataApuracao ? <Quina/> : <PaginaCarregamento />}
        </>
    )
}

export default QuinaPage;