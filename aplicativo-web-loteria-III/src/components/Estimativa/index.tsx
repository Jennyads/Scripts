import styled from "styled-components";

export function Estimativa({ dataProximoConcurso, valorEstimadoProximoConcurso, colorPremio }: any) {
    const value = valorEstimadoProximoConcurso ? valorEstimadoProximoConcurso.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : '';

    return (
        <Container>
            <Escrita>Estimativa de prêmio do próximo concurso. Sorteio em {dataProximoConcurso}:</Escrita>
            <Premio style={{ color: colorPremio }}>{value}</Premio>
        </Container>
    )
}

const Escrita = styled.p`
    color: #4c556c;
`

const Premio = styled.div`
    color: #209869;
    font-weight: bold;
    font-size: large;
`

const Container = styled.div`
    max-width: 300px;
    margin-left: 55px;
`
