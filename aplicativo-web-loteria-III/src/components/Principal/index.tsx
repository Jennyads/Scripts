import styled from "styled-components";
import { Esquerda } from "../Esquerda";
import { Direita } from "../Direita";

export function Principal({ dezenas, acumulado, numeroDoConcurso, dataPorExtenso, trevo, alt, color, name,
    dataProximoConcurso, valorEstimadoProximoConcurso, colorPremio }: any) {

    return (
        <Container>
            <Esquerda trevo={trevo} alt={alt} color={color} name={name} dataProximoConcurso={dataProximoConcurso} 
                valorEstimadoProximoConcurso={valorEstimadoProximoConcurso} colorPremio={colorPremio} />
            <Direita dezenas={dezenas} color={color} acumulado={acumulado} numeroDoConcurso={numeroDoConcurso} dataPorExtenso={dataPorExtenso} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`;