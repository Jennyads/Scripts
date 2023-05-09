import styled from "styled-components";

export function Acumulou({ acumulado }: any) {

    if (acumulado === true) {
        return <Acumula>ACUMULOU!</Acumula>
    } else {
        return <Acumula>NÃO ACUMULOU!</Acumula>
    }

}

const Acumula = styled.div`
    color: ${props =>props.theme.acumulou};
    margin-top: 15px;
    font-size: 30px;
    font-weight: bold;
`;
