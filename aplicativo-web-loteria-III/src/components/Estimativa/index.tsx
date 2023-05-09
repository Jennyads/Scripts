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
    color: ${props =>props.theme.data};
`

const Premio = styled.div`
    color: ${props =>props.theme.estimativa};
    font-weight: bold;
    font-size: large;
`

const Container = styled.div`
    max-width: 300px;
    margin-left: 55px;
`
