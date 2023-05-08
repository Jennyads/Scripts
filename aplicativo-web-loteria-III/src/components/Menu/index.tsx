import { mega, time, qui } from '../../styles/theme';
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components";

export function Menu() {
    const current_page = useLocation().pathname;

    return (
        <Container>
            <Opcao>
                {current_page === "/timemania" ? <Active to="/timemania">Timemania</Active> : <Pagina color={time.loteria} to="/timemania">Timemania</Pagina>}
            </Opcao>

            <Opcao>
                {current_page === "/megasena" ? <Active to="/megasena">Megasena</Active> : <Pagina color={mega.loteria} to="/megasena">Megasena</Pagina>}
            </Opcao>

            <Opcao>
                {current_page === "/quina" ? <Active to="/quina">Quina</Active> : <Pagina color={qui.loteria} to="/quina">Quina</Pagina>}
            </Opcao>
        </Container>
    )
}

const Container = styled.div`
    margin-left: 25px;
    margin-bottom: 35px;
`
const Opcao = styled.text`
    font-weight: bold;
    margin-right: 20px;
    text-decoration: none;
    font-size: large;
`
const Active = styled(Link)`
    color: #ddd;
    pointer-events: none;
    text-decoration: none;
`

const Pagina = styled(Link)`
    color: ${(props) => props.color};
    text-decoration: none;
`