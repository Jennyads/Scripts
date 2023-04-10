import Megasena from "../components/Megasena";
import { UseContexto } from "../hooks";

function Principal(){
    const {megasena} = UseContexto();
    return (
        <>
        {megasena.numeroDoConcurso?
            <div>
                <Megasena />
            </div>
            :
            <div>Carregando...</div>
        }
        
        </>
           
    );
}

export default Principal;