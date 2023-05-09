import styled from 'styled-components';

export function NomeLoteria({ trevo, alt, color, name }: any) {
    return (
        <Container>
            <Trevo>
                <img src={trevo} alt={alt} />
            </Trevo>
            <Escrita style={{ color: color }}>{name}</Escrita>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`

const Trevo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
`

const Escrita = styled.div`
    margin-left: 10px;
    color: ${props =>props.theme.bola};
    font-weight: bold;
    font-size: x-large;
`
