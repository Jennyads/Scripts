import { Principal } from "../../components/Principal";
import trevoQuina  from "../../assets/trevo-quina.png"
import { UseContexto } from "../../hooks";
import { qui } from '../../styles/theme';
import { Carregando } from "../../components/Carregando";
import { ThemeProvider } from "styled-components";

export function Quina() {

    const { quina } = UseContexto()

    return (
        <>
        <ThemeProvider theme={qui}>
            <Carregando dataApuracao={quina.dataApuracao} />
            <Principal
                trevo={trevoQuina}
                alt="trevo-quina"
                name="QUINA"
                color={qui.loteria}
                colorPremio={qui.estimativa}
                dataProximoConcurso={quina.dataProximoConcurso}
                valorEstimadoProximoConcurso={quina.valorEstimadoProximoConcurso}
                numeroDoConcurso={quina.numeroDoConcurso}
                dataPorExtenso={quina.dataPorExtenso}
                dezenas={quina.dezenas}
                acumulado={quina.acumulado}
            />
        </ThemeProvider>
        </>
    )
}