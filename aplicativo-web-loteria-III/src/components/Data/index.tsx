import styled from "styled-components";

export function Data({numeroDoConcurso, dataPorExtenso}:any){
    return(
        <Escrita>Concurso {numeroDoConcurso} - {dataPorExtenso}</Escrita>
    )
}

const Escrita = styled.p`
    color: #4c556c;
`